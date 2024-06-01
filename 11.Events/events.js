//inline event handling
let btn = document.createElement("button");
btn.innerText = "ClickME!";
btn.setAttribute("onclick", "console.log('The button was clicked!!')");
document.querySelector("body").append(btn);
btn.setAttribute("ondblclick", "console.log('The button was clicked twice!!')");

let div = document.createElement("div");
div.innerText = "Let's crack events!";
div.style.backgroundColor = "green";
div.style.color = "white";
div.style.height = "110%";
div.style.width = "50%";
btn.after(div);
div.setAttribute("onmouseover", "console.log('Someone entered the div!!')");

//event handling in other way
btn.onclick = () => {
  console.log("Button was clicked not in inline manner!");
  let a = prompt("Enter a number");
  alert(`Updated number is ${++a}`);
}; //This is the second handler (first is inline) .When we set more than one handlers for the same event , then only the last one will get executed

div.onmouseover = (e) => {
  console.log("Event occured is ", e);
  console.log(
    "Event type is ",
    e.type,
    "\nEvent target : ",
    e.target,
    "\nEvent Xdistance :",
    e.clientX,
    "\nEvent Ydistance : ",
    e.clientY
  );
};

//event Listeners
let div2 = document.createElement("div");
div2.innerText = "Let's conquer the event Listeners in JS!!";
div2.style.height = "100 px";
div2.style.width = "100 px";
div2.style.backgroundColor = "green";
div2.style.color = "yellow";
div.after(div2);

div2.addEventListener("mouseover", (e) => {
  console.log("Event Listener initiated!!!");
  console.log("Event occured is ", e);
  console.log(
    "Event type is ",
    e.type,
    "\nEvent target : ",
    e.target,
    "\nEvent Xdistance :",
    e.clientX,
    "\nEvent Ydistance : ",
    e.clientY
  );
});
div2.addEventListener("mouseover", () => {
  console.log("Event Listener 2 initiated!!! with handler 2");
}); //event Listeners can initiate more than one event callbacks for the same event
div2.addEventListener("mouseover", () => {
  console.log("Event Listener 2 initiated!!! with handler 3");
});
div2.addEventListener("mouseover", () => {
  console.log("Event Listener 2 initiated!!! with handler 4");
});

//To remove eventListener
div2.removeEventListener("mouseover", () => {
  console.log("Event Listener 2 initiated!!! with handler 4");
}); //This wont make any change as the functions are declared at different memory locations.We should refer the same callback fn at the remove line of code.
let callback = () => {
  console.log("Event Listener 2 initiated!!! with handler 5");
};
div2.addEventListener("mouseover", callback);
div2.removeEventListener("mouseover", callback);
