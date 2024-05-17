/**When the webpage is loaded, the browser creates a Document Object MOdel(DOM) of the page 
 * In order to print documents , we use console.dir() instead of console.log()
*/
console.dir(window.document);
//In order to access class in html
let classes = document.getElementsByClassName("myClass");
console.dir(classes);

//In order to access tags
let taggs = document.getElementsByTagName("p");
console.dir(taggs);

//IN order to access by ids
let ids = document.getElementById("myID");
console.dir(ids);

/**to access anything in html use querSelector
let elements = document.querySelector("tag/class/id");
Use .className to detect it as a class #to id and nothing for tags
querySelector  returns the first element to get complete objects use querySelectorAll

PROPERTIES
 * tagName => returns tag
 * innerText => returns text content
 * innerHTML => returns HTML contents or plain texts
 * textContent => returns textual content even for hidden elements
 * 
navigation => to traverse from one level to another
we can use firstChild,lastChild,children[] to navigate*/
let firstChild = document.querySelector("p").children;
console.log(firstChild); 

let html = document.querySelector("p").innerHTML;
console.dir(html);

let body = document.querySelector("p");
console.dir(body);
body.innerText = "Hellooo everyone!!!!"; //manipulating p tag using DOM concepts

//to get the value of attributes present
let div = document.querySelector("div");
console.log(div);
div.innerText = "It's nice meeting you !!!!";
div.innerHTML = div.innerHTML+`<ul>List of attributes present<li>div</li><li>p</li><li>h1</li></ul>`;
let id = div.getAttribute("id");
console.log(id);
let p = document.querySelector("p");
id = p.getAttribute("name");
console.log(id);

//To set the attribute value 
div.setAttribute("class","myClass");
console.log("New value of class = ",div.getAttribute("class"));

//Changing Styles
div.style.backgroundColor = "lightgreen";
div.style.height = "100%";
div.style.width = "auto";


//adding new elements
let newBtn = document.createElement("button");
newBtn.innerText = "Click ME !!!!";
console.dir(newBtn);
div.append(newBtn); //at the end(inside) the div

html = document.createElement("h2");
html.innerText = "LET'S CONQUER DOM!!!"
div.prepend(html); //To add at the beginning(inside)

let newDiv = document.createElement("div");
newDiv.style.backgroundColor = "pink";
newDiv.innerText = "Today is so good , right!!!";
newDiv.style.height = "50px";
newDiv.style.color = "brown";
div.before(newDiv); //To add at the beginning(outside)

let link = document.createElement("a");
link.innerText = "DOM";
link.href = "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction";
div.after(link); //To add after the element(outside)

//To remove elements
document.querySelector("p").remove();

//AppendChild
let newChild = document.createElement("h3");
newChild.innerText = "Hope you all are doing well!!!";
newDiv.appendChild(newChild);
newDiv.style.height = "100px";

//removeChild
newDiv.removeChild(newChild);