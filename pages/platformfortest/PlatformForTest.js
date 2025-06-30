class PlatformForTest {
  constructor(page) {
    this.page = page;
    this.getStartFree = 'button:has-text("Get started free")';
    
  }
  async clickGetStartFree() {
    await this.page.click(this.getStartFree);
  }
}
module.exports = { PlatformForTest };
