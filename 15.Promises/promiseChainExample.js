function getData(dataId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("data", dataId);
      res("success");
    }, 2000);
  });
}
//Promise Chain
console.log("getting data1....");
getData(1)
  .then((res) => {
    console.log("getting data2....");
    return getData(2);
  })
  .then((res) => {
    console.log("getting data3....");
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });
