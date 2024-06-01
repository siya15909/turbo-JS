/**The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
 * super(args) //calls parent class's constructor
 * super.parentMethod(args)
 */
class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eat");
  }
}
class engineer extends Person {
  constructor(branch) {
    super(); //to invoke parent's constructor
    this.branch = branch;
  }
  work() {
    console.log("Sleep kero!");
  }
}
let engObj = new engineer("Computer");
console.log(engObj);
