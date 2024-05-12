let input = prompt("Enter a number");
let newArray=[];
for(let i =1;i<=input;i++){
    newArray.push(i);
}
console.log(newArray);
const sum = (prev,curr)=>{
    return prev+curr;
}
const product = (prev,curr)=>{
    return prev*curr;
}
alert(`Sum from 1 to ${input} is ${newArray.reduce(sum)}`);
alert(`Product of 1 to ${input} numbers are ${newArray.reduce(product)}`); 