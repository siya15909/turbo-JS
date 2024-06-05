const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
  });
};
let promise = getPromise();
promise.then(() => {
  console.log("Promise fullfilled!!!");
});
// console.log(promise);