/**Built-in functions to manipulate a string
 * IN JS Strings are immutable
 */
let str = 'Hello JS';
console.log(str);
str.toUpperCase();
console.log(str); //Hello JS => The built in functions never change the values in variable.
console.log(str.toUpperCase()); //HELLO JS
str = str.toUpperCase();
console.log(str);//HELLO JS 
str = str.toLowerCase();
console.log(str);//hello js
//trim() removes whitespaces from the beginning and end of a string
str = '  hello js  ';
str = str.trim();
console.log(str);
let str2 = str.slice(0,3);//returns part of a string non inclusive the ending value
console.log(str2); 
console.log(str.concat(str2)); //joins str2 with str
str = str.replace('o','oo'); //replaces the given value with a newvalue
console.log(str);
console.log(str.charAt(2)); //returns the value at the index