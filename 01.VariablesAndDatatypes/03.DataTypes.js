//DATATYPES => 7 Primitive 
num = 25;
console.log(typeof num);  //number
name = "Yaseen"
console.log(typeof name);  //string
isGood = true;
console.log(typeof isGood)  //boolean
hell = undefined;
console.log(typeof hell)  //undefined =>The variable does not has any kind of datatype
savage = null;
console.log(typeof savage) //null => Object with no key pairs.
Age = Symbol(25);
console.log(typeof Age);  //symbol
a = BigInt(56);
console.log(typeof a); //bigint

//Non primitive dataType => Object 
const Obj = {
    num : 25,
    name : "Yaseen",
    isGood : true,
    hell : undefined,
    savage : null,
    Age : Symbol(25),
    a : BigInt(56)
}
//Can be accessed by =>
Obj.Age //Or
Obj["Age"]