//functions which work only when they are binded with some objects are called methods
//Eg => String.toUpperCase();
// Callback function is passed as an argument to another function
//forEach => 3 args => value , index ,array
//arr.forEach((val)=>{
    //console.log(val);
//})
let arr = ["Pune","Mumbai","Jharkhand"];
arr.forEach((val,idx,arr)=>{ //We can choose args according to the problem
    console.log(val.toUpperCase(),idx,arr);
});
/*Higher Order Function/Methods => Returns or take arguments which is of type function
eg => forEach()
*/