const { chromium } = require('playwright');

describe('Login Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    // Mở trình duyệt Chromium trước mỗi bài kiểm thử
    browser = await chromium.launch();
  });

  beforeEach(async () => {
    // Tạo trang mới trước mỗi bài kiểm thử
    page = await browser.newPage();
  });

  afterAll(async () => {
    // Đóng trình duyệt sau khi tất cả bài kiểm thử hoàn tất
    await browser.close();
  });

  afterEach(async () => {
    // Đóng trang sau mỗi bài kiểm thử
    await page.close();
  });

  it('should login successfully', async () => {
    // Điều hướng đến trang web cần kiểm thử
    await page.goto('http://localhost:3000/nlogin');

    // Điền thông tin đăng nhập và ấn nút đăng nhập
    await page.fill('input[name="email"]', 'admin12@gmail.com');
    await page.fill('input[name="password"]', 'Hung12345');
    await page.click('button[type="submit"]');

    // Chờ trang web xử lý đăng nhập
    await page.waitForNavigation();

    // Kiểm tra xem có thông báo thành công hay không
    const successMessage = await page.textContent('.success-message');
    expect(successMessage).toContain('Login successful');
  },10000);

  // Thêm các bài kiểm thử khác nếu cần
});
