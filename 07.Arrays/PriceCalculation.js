array = [240,645,300,900,50];
console.log(`Original Price : ${array}`);
for(i in array){
    array[i] = array[i]*90/100;
}
// or
// let i = 0; //track index
// for(let val of array){
//    let offer = val/10;
//    array[i]=array[i]-offer;
//    i++;
// }
console.log(`After discount : ${array}`);