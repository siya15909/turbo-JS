/**
 * Compact way of writing a function
 * const functionName = (param1,param2...)=>{
 *     //do somework
 * }
 * functionName stores the entire function definition and it can be invoked by functionName(arg1,arg2....);
 */
//SUM FUNCTION
const arrowSum = (a,b)=>{
    console.log(a+b);
}
console.log(arrowSum);
console.log(arrowSum(123,456));
const arrowMul = (a,b)=>{
    return a*b;
}
const printHello = ()=>{
    console.log("Hello Coderss!!!");
}
console.log(arrowMul(123,654));
printHello();
