function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 4000);
  });
}
// console.log("fetching data1..");
// let p = asyncFunc1();
// p.then((res) => {
//   console.log(res);
// });
// console.log("fetching data2..");
// p = asyncFunc2();
// p.then((res) => {
//   console.log(res);
// });
console.log("fetching data1..");
let p = asyncFunc1();
p.then((res) => {
  console.log(res);
  console.log("fetching data2..");
  p = asyncFunc2();
  p.then((res) => {
    console.log(res);
  });
});
