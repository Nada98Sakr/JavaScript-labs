export default class User {
  constructor(name, password) {
    this.name = name;
    this.passsword = password;
  }
  _validUser() {
    if (this.name === "admin" && this.passsword === "123") {
      return true;
    }
    return false;
  }
}
