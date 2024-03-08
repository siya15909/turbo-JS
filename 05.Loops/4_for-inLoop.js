/**
 * Syntax =>
 * for(let key in object){
 *     do something
 * }
 * Initialization , Updation , Condition statements aren't required
 * Used for objects
 */
let data ={
    name : "Ryan",
    role : "Guest",
    destination : "Earth",
    Species : "Alien"
};
for(let key in data){
    console.log('key is ',key,' and value is ',data[key]);
}