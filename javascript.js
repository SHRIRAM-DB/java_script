// <!-- 1. Show alert of the text content of the h1 element using class -->
let alebtn = document.querySelector(".header");
alert(alebtn.textContent)
//  <!-- 2. Create a new div and append the child to the container, with the text content New Box-->
let addbox = document.getElementById("addBox");
let count = 0;
addbox.addEventListener("click", () => {
  count++;
  let boxs = document.createElement("div");
  boxs.textContent = "box";
  boxs.classList.add("box-style");
  document.body.appendChild(boxs);
});
let removeBox = document.getElementById("removeBox");
removeBox.addEventListener("click", () => {
  let rem = document.querySelector(".box-style");
  document.body.removeChild(rem);
});
let showBoxCount = document.getElementById("showBoxCount");
showBoxCount.addEventListener("click", () => {
  let ptag = document.createElement("p");
  ptag.textContent = count;
  document.body.appendChild(ptag);
});
let link = document.getElementById("link");
link.addEventListener("click", () => {
  let i = document.createElement("a");
  i.textContent = "click me";
  i.setAttribute("href", "https://www.google.co.in/");
  document.body.appendChild(i);
});
