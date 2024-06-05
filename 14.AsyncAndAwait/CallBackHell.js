function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
getData(1, () => {
  console.log("Loading data2");
  getData(2, () => {
    console.log("Loading data3");
    getData(3, () => {
      console.log("Loading data4");
      getData(4, () => {
        console.log("Loading data5");
        getData(5);
      });
    });
  });
});
