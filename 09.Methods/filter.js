/**
 * Creates a new array of elements that give true for a condition/filter
 */
arr = [1,2,3,4,5,6,7,8,9];
let newArray = arr.filter((val)=>{
    return val%2 ===0
});
console.log(newArray);