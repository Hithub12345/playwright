class Login {
  constructor(page) {
    this.page = page;
    this.url = "https://www.saucedemo.com/";
    this.usernameInput = '[name="user-name"]';
    this.passwordInput = '[name="password"]';
    this.loginButton = '[type="submit"]';
  }
  async pageLoad() {
    await this.page.goto(this.url);
  }
  async fillUsername(userName) {
    console.log('UserName is:',userName);
    await this.page.fill(this.usernameInput, userName);
  }
  async fillPassword(userPassword) {
    await this.page.fill(this.passwordInput, userPassword);
  }
  async submitButton() {
    await this.page.click(this.loginButton);
  }
}

module.exports = { Login };
