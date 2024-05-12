/**
 * Performs some operations and reduce the array into a single value
 * Returns that single value
 */
let arr = [1,2,3,4,5];
const output = arr.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(output);
const max = arr.reduce((prev,curr)=>{
    return (prev > curr)?prev:curr;
});
console.log(max);