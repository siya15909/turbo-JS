let orgname = prompt("Enter your name ");
orgname = orgname.replaceAll(' ','_');
let userName = "@"+orgname.toLowerCase()+orgname.length;
alert(`Your username is ${userName}`);