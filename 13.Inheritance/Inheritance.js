/**Inheritance is passing down properties and methods from parent to child class
 * class Parent{...}
 * class Child extends Parent {....}
 * If child and parent have same method,child's method will be used.[Method Overriding]
 */

class Parent {
  hello() {
    console.log("Hello!");
  }
}
class Child extends Parent {
  hii() {
    console.log("hiii");
  }
}
let obj = new Child();
obj.hello();
