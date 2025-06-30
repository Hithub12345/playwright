class About {
  constructor(page) {
    this.page = page;
    this.menuClick = '[id="react-burger-menu-btn"]';
    this.aboutClick = '[id="about_sidebar_link"]';
    this.productClick = '(//span[contains(text(),"Products")]/parent::div)[1]';
    this.platformClick = '//span[contains(text(),"Platform for Test")]/parent::div/ancestor::a';
  }
  async clickMenu(){
    await this.page.click(this.menuClick);
  }
  async clickAbout(){
    await this.page.click(this.aboutClick);
  }
  async clickProduct(){
    await this.page.click(this.productClick)
  }
  async clickPlatform(){
    await this.page.click(this.platformClick)
  }
}
module.exports = { About };