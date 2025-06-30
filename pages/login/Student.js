class Student {
  constructor(name, age, role, address) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.address = address;
  }
  display(){
    console.log(this.name);
  }
}
module.exports = { Student };