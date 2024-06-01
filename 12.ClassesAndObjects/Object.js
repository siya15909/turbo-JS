const sampleObj = {
  name: "Sample1",
  id: 1,
  method: function () {
    console.log("My name is ", this.name); //sampleObj.name
  },
};
/**
 * A js object is an entity having state and behaviour(properties and method)
 * JS object have a special property called PROTOTYPE
 * we can set it using __proto__
 * If obj and proto has same method, object's method will be used
 */
const sampleObj1 = {
  name: "sampleObj1",
};
const sampleObj2 = {
  name: "sampleObj2",
};
sampleObj1.__proto__ = sampleObj;
sampleObj2.__proto__ = sampleObj;
console.log(sampleObj1.method());
