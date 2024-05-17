// let text = document.querySelector("h2").innerText;
// let newText = " from ApnaCollege";
// h2.innerText = text+newText;
let box = document.querySelector(".box");
// console.dir(box);
box.innerText = box.innerText+" Helloooooo";
let divs = document.querySelectorAll(".box");
console.dir(divs[1]);
divs[1].innerText = "How are you doingg!!!!";
divs[2].innerText = "Welcome !!!!";
console.dir(document.body.firstChild);

//appendChild
let newDiv = document.createElement("div");
newDiv.style.color="silver";
newDiv.innerText ="I am new Here !!!";
newDiv.style.backgroundColor = "green";
divs[0].style.border="3px solid red";
newDiv.setAttribute("class","newClass");
divs[0].appendChild(newDiv);

//removeChild
divs[0].removeChild(newDiv);

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!!!";
newBtn.style.backgroundColor = "red";
newBtn.style.color ="white";
document.querySelector("body").prepend(newBtn);

let p = document.createElement("div");
p.innerText ="new p tag";
p.setAttribute("class","box");
document.querySelector("body").append(p);
p.setAttribute("class","newClass"); //overlapping the classes

//classList
p.classList.add("myClass"); //repeated attributes will not be seen .
p.classList.add("box");
p.classList.remove("box");