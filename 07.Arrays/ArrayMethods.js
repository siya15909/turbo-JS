//push() => Add the elements at the end of the array
//returns the length of updated array
let foodItems = ['Apple','Orange','Banana','Chips']
console.log(foodItems.push('Chicken'));//5
console.log(foodItems);
foodItems.push('Lollipop','IceCream','Pepper');
console.log(foodItems);

//pop() => Delete the item from end and returns it
console.log(foodItems.pop());
console.log(foodItems);

//toString() =>Converts array to String
console.log(foodItems.toString());
console.log(foodItems);//Original array is not affected here
let marks = [1,2,3,4,5]
console.log(marks);
console.log(marks.toString());

//concat() => Joins more than one strings and returns the result
console.log(foodItems.concat(marks));
console.log(foodItems);//Orginal array is not affected
console.log(marks);

//unshift() => add to the beginning of array and returns the length of updated array
console.log(foodItems.unshift("Cheese","Burger"));
console.log(foodItems);

//shift() => deletes item from the beginning and returns it
console.log(foodItems.shift());
console.log(foodItems);

//slice() =>returns a piece of array
console.log(foodItems.slice(1,6)); //arrayname.slice(startIndex,endIndex) endIndex not inclusive
console.log(foodItems.slice(3));//endIndex is bydefault the length of array
console.log(foodItems.slice());//returns the array completely
console.log(foodItems);//original array not affected

//splice() => deletes and adds elements from a specific index arrayName.splice(startIndex,deleteCount,newEle1,newEle2,....);
foodItems.splice(1,0,"Duck Roast","Mutton");//Changes the original array =>Add element
console.log(foodItems);
foodItems.splice(0,3);//delete element
console.log(foodItems);
console.log(foodItems.splice(5));//deletes all elements from 5 and returns the deleted items
console.log(foodItems);
foodItems.splice(0,1,"shawarma")//replace element
console.log(foodItems);