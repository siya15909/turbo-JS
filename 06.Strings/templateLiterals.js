/**A way to have embedded expressions in strings 
 * `this is a template hei babujiiii`
 * String Interpolation =>To create strings by doing substitution of placeholders
 * `string text${expression}string
*/
let day = "monday";
let num = 3;
//Normal string
console.log("Today is",day);
//Template string
console.log(`Today is ${day} \nToday is actually the ${num}rd day in this month`);
/**Escape characters => /n==> new line
 * /t ==>tab space
 * Even though they have two characters, length() treats them as a single one
 */