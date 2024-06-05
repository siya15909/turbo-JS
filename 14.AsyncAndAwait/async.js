console.log("One");
console.log("Two");
setTimeout(() => {
  console.log("Three");
}, 2500);
console.log("Four");
console.log("Five");

//Synchronous callback
function sum(a, b) {
  console.log(a + b);
}
function calculateSum(a, b, sumCallBack) {
  sumCallBack(a, b);
}
calculateSum(1, 4, sum);
calculateSum(1, 6, (a, b) => {
  console.log(a + b);
});
//Callbacks can be the functionName and the function definition


//asynchronous callback
const hello = ()=>{
    console.log("Hello!");
}
setTimeout(hello,6000);