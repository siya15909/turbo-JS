let promise = new Promise(() => {
  console.log("I am new Promise!!!");
});
console.log(promise);
promise = new Promise((resolve) => {
  console.log("Resolve added");
  resolve("Success!");
});
console.log(promise);
promise = new Promise((resolve, reject) => {
  console.log("Reject added");
  reject("failed!");
});
console.log(promise); //Error will be shown
