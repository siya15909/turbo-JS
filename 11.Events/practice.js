let toggleBtn = document.createElement("label");
toggleBtn.setAttribute("class", "switch");
let input = document.createElement("input");
input.type = "checkbox";
let span = document.createElement("span");
span.className = "slider round";
document.querySelector("body").append(toggleBtn);
toggleBtn.appendChild(input);
toggleBtn.appendChild(span);
input.addEventListener("click", (e) => {
  document.querySelector("body").classList.toggle("dark-mode");
});
