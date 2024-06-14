let URL = "https://cat-fact.herokuapp.com/facts";
let postURL = "https://reqres.in/api/register";
let btn = document.querySelector("#getFacts");
let para = document.querySelector("#fact");
let form = document.querySelector("form");
let p = document.querySelector("#resId");
let pstring = document.querySelector("#res");

const getFacts = async () => {
  let response = await fetch(URL);
  let data = await response.json();
  para.innerText = data[0].text;
};
btn.addEventListener("click", getFacts);
//Promise Chain
(function () {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      para.innerText = data[1].text;
    });
})();

//POST Request
const putFacts = async (data) => {
  const res = await fetch(postURL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  p.innerText = "Your id is " + result.id;
  pstring.innerText = "Token is " + result.token;
};
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(this);
  let Data = {};
  data.forEach((val, key) => {
    Data[key] = val;
  });
  putFacts(Data);
});
