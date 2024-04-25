/**Linear Collection of elements of same key name . They can be accessed using position or index value.The default datatype is object
 * arrays are mutable.They can be changed using array[index]
  */
//Creation 
let array1 = [1,2,3,4];
let array2 = ["Thor","CaptainAmerica","Hulk"];
let array3 = ["Himalayan",350,"ContinentalGT"];
console.log(array1,array2,array3);

//Looping over arrays
for(let i =0; i<array3.length;i++)
    console.log(array3[i]);
for (const iterator of array2) {
    console.log(iterator);
}