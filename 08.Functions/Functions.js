// Block of code that performs a specific task,can be invoked whenever needed
/**FUNCTION DEFINITION
 * function functionName(){
 * //do some work
 * }
 * function functionName(param1,param2,,,,){
 * //do some work
 * }
 * FUNCTION CALL
 * functionName();
 */
//Function Definition
function myFunction(){
    console.log("Hello coderssss!!!!");
    console.log("Welcome ");
}
//Function Call
myFunction();
function sum(x,y){
    console.log("before return");
    return (x+y);
    //console.log("After return");//Unreachable code => statements after return statement can't be executed!!!
}
console.log(sum(789,456));//arguments =>789,456
//Function parameters are kinda local variables of a function and it has block scope