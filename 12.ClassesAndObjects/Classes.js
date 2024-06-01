/**
 * Class is a program-code template for creating objects
 * Those objects will have some state(variables) & some behaviour (functions) inside it
 * SYNTAX => class MyClass{
 *     constructor(){...}
 *     myMethod(){...}
 * }
 * let myObj = new MyClass(); constructor
 * If the constructor is not mentioned, then JS will automatically invoke it
 * If the params in constructor are not correct , error won't be shown
 */
class RoyalEnfield {
  constructor() {
    console.log("Welcome to the world of MotorCycles!!!");
  }
  himalayan() {
    console.log("Himalayan");
  }
  continentalGT() {
    console.log("ContinentalGT");
  }
  setBrand(brand) {
    this.brand = brand;
    console.log(this.brand);
  }
}
let classic350 = new RoyalEnfield(); //constructor invoked
console.log(classic350.setBrand("classic350"));
console.log(classic350.continentalGT());
