"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaywrightEnv = void 0;
const constants_1 = require("./constants");
const utils_1 = require("./utils");
const coverage_1 = require("./coverage");
const handleError = (error) => {
    process.emit('uncaughtException', error);
};
const getBrowserPerProcess = async (playwrightInstance, browserType, config) => {
    const { launchType, userDataDir, launchOptions, connectOptions } = config;
    if (launchType === constants_1.LAUNCH || launchType === constants_1.PERSISTENT) {
        // https://github.com/playwright-community/jest-playwright/issues/42#issuecomment-589170220
        if (browserType !== constants_1.CHROMIUM && (launchOptions === null || launchOptions === void 0 ? void 0 : launchOptions.args)) {
            launchOptions.args = launchOptions.args.filter((item) => item !== '--no-sandbox');
        }
        const options = (0, utils_1.getBrowserOptions)(browserType, launchOptions);
        if (launchType === constants_1.LAUNCH) {
            return playwrightInstance.launch(options);
        }
        if (launchType === constants_1.PERSISTENT) {
            return playwrightInstance.launchPersistentContext(userDataDir, options);
        }
    }
    const options = (0, utils_1.getBrowserOptions)(browserType, connectOptions);
    return options && 'endpointURL' in options
        ? playwrightInstance.connectOverCDP(options)
        : playwrightInstance.connect(options);
};
const getDeviceConfig = (device, availableDevices) => {
    if (device) {
        if (typeof device === 'string') {
            const { defaultBrowserType, ...deviceProps } = availableDevices[device];
            return deviceProps;
        }
        else {
            const { name, defaultBrowserType, ...deviceProps } = device;
            return deviceProps;
        }
    }
    return {};
};
const getDeviceName = (device) => {
    let deviceName = null;
    if (device != null) {
        if (typeof device === 'string') {
            deviceName = device;
        }
        else {
            deviceName = device.name;
        }
    }
    return deviceName;
};
const getPlaywrightEnv = (basicEnv = 'node') => {
    const RootEnv = require(basicEnv === 'node'
        ? 'jest-environment-node'
        : 'jest-environment-jsdom').default;
    return class PlaywrightEnvironment extends RootEnv {
        constructor(config) {
            super(config);
            this._config = config.projectConfig;
        }
        _getContextOptions(devices) {
            const { browserName, device } = this._config;
            const browserType = (0, utils_1.getBrowserType)(browserName);
            const { contextOptions } = this._jestPlaywrightConfig;
            const deviceBrowserContextOptions = getDeviceConfig(device, devices);
            const resultContextOptions = (0, utils_1.deepMerge)(deviceBrowserContextOptions, (0, utils_1.getBrowserOptions)(browserName, contextOptions));
            if (browserType === constants_1.FIREFOX && resultContextOptions.isMobile) {
                console.warn((0, utils_1.formatError)(`isMobile is not supported in ${constants_1.FIREFOX}.`));
                delete resultContextOptions.isMobile;
            }
            return resultContextOptions;
        }
        _getSeparateEnvBrowserConfig(isDebug, config) {
            const { debugOptions } = this._jestPlaywrightConfig;
            const defaultBrowserConfig = {
                ...constants_1.DEFAULT_CONFIG,
                launchType: constants_1.LAUNCH,
            };
            let resultBrowserConfig = {
                ...defaultBrowserConfig,
                ...config,
            };
            if (isDebug) {
                if (debugOptions) {
                    resultBrowserConfig = (0, utils_1.deepMerge)(resultBrowserConfig, debugOptions);
                }
            }
            else {
                resultBrowserConfig = (0, utils_1.deepMerge)(this._jestPlaywrightConfig, resultBrowserConfig);
            }
            return resultBrowserConfig;
        }
        _getSeparateEnvContextConfig(isDebug, config, browserName, devices) {
            const { device, contextOptions } = config;
            const { debugOptions } = this._jestPlaywrightConfig;
            const deviceContextOptions = getDeviceConfig(device, devices);
            let resultContextOptions = contextOptions || {};
            if (isDebug) {
                if (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.contextOptions) {
                    resultContextOptions = (0, utils_1.deepMerge)(resultContextOptions, debugOptions.contextOptions);
                }
            }
            else {
                resultContextOptions = (0, utils_1.deepMerge)(this._jestPlaywrightConfig.contextOptions, resultContextOptions);
            }
            resultContextOptions = (0, utils_1.deepMerge)(deviceContextOptions, resultContextOptions);
            return (0, utils_1.getBrowserOptions)(browserName, resultContextOptions);
        }
        async _setNewPageInstance(context = this.global.context) {
            const { exitOnPageError } = this._jestPlaywrightConfig;
            const page = await context.newPage();
            if (exitOnPageError) {
                page.on('pageerror', handleError);
            }
            return page;
        }
        async _setCollectCoverage(context) {
            await context.exposeFunction('reportCodeCoverage', (coverage) => {
                if (coverage)
                    (0, coverage_1.saveCoverageToFile)(coverage);
            });
            await context.addInitScript(() => window.addEventListener('beforeunload', () => {
                // @ts-ignore
                reportCodeCoverage(window.__coverage__);
            }));
        }
        async setup() {
            const { wsEndpoint, browserName, testEnvironmentOptions } = this._config;
            this._jestPlaywrightConfig = testEnvironmentOptions[constants_1.CONFIG_ENVIRONMENT_NAME];
            const { connectOptions, collectCoverage, selectors, launchType, skipInitialization, } = this._jestPlaywrightConfig;
            if (wsEndpoint) {
                this._jestPlaywrightConfig.connectOptions = {
                    ...connectOptions,
                    wsEndpoint,
                };
            }
            const browserType = (0, utils_1.getBrowserType)(browserName);
            const device = this._config.device;
            const deviceName = getDeviceName(device);
            const { name, instance: playwrightInstance, devices, } = (0, utils_1.getPlaywrightInstance)(browserType);
            const contextOptions = this._getContextOptions(devices);
            if (name === constants_1.IMPORT_KIND_PLAYWRIGHT && selectors) {
                const playwright = require('playwright');
                await Promise.all(selectors.map(({ name, script }) => playwright.selectors
                    .register(name, script)
                    .catch((e) => {
                    if (!e.toString().includes('has been already')) {
                        throw e;
                    }
                })));
            }
            this.global.browserName = browserType;
            this.global.deviceName = deviceName;
            if (!skipInitialization) {
                const browserOrContext = await getBrowserPerProcess(playwrightInstance, browserType, this._jestPlaywrightConfig);
                this.global.browser =
                    launchType === constants_1.PERSISTENT ? null : browserOrContext;
                this.global.context =
                    launchType === constants_1.PERSISTENT
                        ? browserOrContext
                        : await this.global.browser.newContext(contextOptions);
                if (collectCoverage) {
                    await this._setCollectCoverage(this.global.context);
                }
                this.global.page = await this._setNewPageInstance();
            }
            this.global.jestPlaywright = {
                configSeparateEnv: async (config, isDebug = false) => {
                    const { device } = config;
                    const browserName = config.useDefaultBrowserType && device
                        ? (0, utils_1.getDeviceBrowserType)(device, devices) || constants_1.CHROMIUM
                        : config.browser || browserType;
                    const deviceName = device ? getDeviceName(device) : null;
                    (0, utils_1.checkDevice)(deviceName, devices);
                    const resultBrowserConfig = this._getSeparateEnvBrowserConfig(isDebug, config);
                    const resultContextOptions = this._getSeparateEnvContextConfig(isDebug, config, browserName, devices);
                    const { instance } = (0, utils_1.getPlaywrightInstance)(browserName);
                    const browser = await getBrowserPerProcess(instance, browserName, resultBrowserConfig);
                    const context = await browser.newContext(resultContextOptions);
                    const page = await context.newPage();
                    return { browserName, deviceName, browser, context, page };
                },
                resetPage: async () => {
                    var _a;
                    await ((_a = this.global.page) === null || _a === void 0 ? void 0 : _a.close());
                    this.global.page = await this._setNewPageInstance();
                },
                resetContext: async (newOptions) => {
                    const { browser, context } = this.global;
                    await (context === null || context === void 0 ? void 0 : context.close());
                    const newContextOptions = newOptions
                        ? (0, utils_1.deepMerge)(contextOptions, newOptions)
                        : contextOptions;
                    this.global.context = await browser.newContext(newContextOptions);
                    this.global.page = await this._setNewPageInstance();
                },
                resetBrowser: async (newOptions) => {
                    const { browser } = this.global;
                    await (browser === null || browser === void 0 ? void 0 : browser.close());
                    this.global.browser = await getBrowserPerProcess(playwrightInstance, browserType, this._jestPlaywrightConfig);
                    const newContextOptions = newOptions
                        ? (0, utils_1.deepMerge)(contextOptions, newOptions)
                        : contextOptions;
                    this.global.context = await this.global.browser.newContext(newContextOptions);
                    this.global.page = await this._setNewPageInstance();
                },
                saveCoverage: async (page) => (0, coverage_1.saveCoverageOnPage)(page, collectCoverage),
            };
        }
        async handleTestEvent(event) {
            const { browserName } = this._config;
            const { collectCoverage, haveSkippedTests } = this._jestPlaywrightConfig;
            const browserType = (0, utils_1.getBrowserType)(browserName);
            const { instance, devices } = (0, utils_1.getPlaywrightInstance)(browserType);
            const contextOptions = this._getContextOptions(devices);
            if (haveSkippedTests && event.name === 'run_start') {
                this.global.browser = await getBrowserPerProcess(instance, browserType, this._jestPlaywrightConfig);
                this.global.context = await this.global.browser.newContext(contextOptions);
                if (collectCoverage) {
                    await this._setCollectCoverage(this.global.context);
                }
                this.global.page = await this._setNewPageInstance();
            }
        }
        async teardown() {
            const { browser, context, page } = this.global;
            const { collectCoverage } = this._jestPlaywrightConfig;
            page === null || page === void 0 ? void 0 : page.removeListener('pageerror', handleError);
            if (collectCoverage) {
                await Promise.all(context.pages().map((p) => p.close({
                    runBeforeUnload: true,
                })));
                // wait until coverage data was sent successfully to the exposed function
                await new Promise((resolve) => setTimeout(resolve, 10));
            }
            await (browser === null || browser === void 0 ? void 0 : browser.close());
            await super.teardown();
        }
    };
};
exports.getPlaywrightEnv = getPlaywrightEnv;
exports.default = (0, exports.getPlaywrightEnv)();
