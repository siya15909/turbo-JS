class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Hello!");
  }
}
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    console.log("Edit data!");
  }
}
let tchr = new Admin("sambar", "sambar@yahoo.com");
console.log(tchr);
