function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
export var AccessibilityManager = /*#__PURE__*/function () {
  function AccessibilityManager() {
    _classCallCheck(this, AccessibilityManager);
    _defineProperty(this, "activeIndex", 0);
    _defineProperty(this, "coordinateList", []);
    _defineProperty(this, "layout", 'horizontal');
  }
  _createClass(AccessibilityManager, [{
    key: "setDetails",
    value: function setDetails(_ref) {
      var _ref$coordinateList = _ref.coordinateList,
        coordinateList = _ref$coordinateList === void 0 ? [] : _ref$coordinateList,
        _ref$container = _ref.container,
        container = _ref$container === void 0 ? null : _ref$container,
        _ref$layout = _ref.layout,
        layout = _ref$layout === void 0 ? null : _ref$layout,
        _ref$offset = _ref.offset,
        offset = _ref$offset === void 0 ? null : _ref$offset,
        _ref$mouseHandlerCall = _ref.mouseHandlerCallback,
        mouseHandlerCallback = _ref$mouseHandlerCall === void 0 ? null : _ref$mouseHandlerCall;
      this.coordinateList = coordinateList !== null && coordinateList !== void 0 ? coordinateList : this.coordinateList;
      this.container = container !== null && container !== void 0 ? container : this.container;
      this.layout = layout !== null && layout !== void 0 ? layout : this.layout;
      this.offset = offset !== null && offset !== void 0 ? offset : this.offset;
      this.mouseHandlerCallback = mouseHandlerCallback !== null && mouseHandlerCallback !== void 0 ? mouseHandlerCallback : this.mouseHandlerCallback;
      if (this.activeIndex >= this.coordinateList.length) {
        this.activeIndex = this.coordinateList.length - 1;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function keyboardEvent(e) {
      switch (e.key) {
        case 'ArrowRight':
          {
            if (this.layout !== 'horizontal') {
              return;
            }
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1);
            this.spoofMouse();
            break;
          }
        case 'ArrowLeft':
          {
            if (this.layout !== 'horizontal') {
              return;
            }
            this.activeIndex = Math.max(this.activeIndex - 1, 0);
            this.spoofMouse();
            break;
          }
        default:
          {
            break;
          }
      }
    }
  }, {
    key: "spoofMouse",
    value: function spoofMouse() {
      if (this.layout !== 'horizontal') {
        return;
      }
      var _this$container$getBo = this.container.getBoundingClientRect(),
        x = _this$container$getBo.x,
        y = _this$container$getBo.y;
      var coordinate = this.coordinateList[this.activeIndex].coordinate;
      var pageX = x + coordinate;
      var pageY = y + this.offset.top;
      this.mouseHandlerCallback({
        pageX: pageX,
        pageY: pageY
      });
    }
  }]);
  return AccessibilityManager;
}();