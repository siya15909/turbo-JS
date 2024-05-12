/**
 * Created a new array with the results of some operation.
 * The value its callback returns are used to form a new array
 * arr.map(callbackFnx(value,index,array))
 * let newArray = arr.map((val)=>{
 * return val*2;
 * })
 */
let arr = [123,456,789];
let newArray = arr.map((val)=>{
    return val**2;
});
console.log("array is ",arr);
console.log("New array is ",newArray);
