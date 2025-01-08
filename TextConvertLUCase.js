let content = document.querySelector("#content");
let btn = document.querySelectorAll("#btn");
// console.log(content.innerHTML);

function upperCaseConvert() {
  let text = content;
  text.value = text.value.toUpperCase();
}

function LowerCaseConvert() {
  let text = content;
  text.value = text.value.toLowerCase();
}
function capitalizeConvert() {
  let text = content;
  text.value = text.value
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function clear() {
  let text = content;
  text.value = " ";
}
// upperCaseConvert();
// upperCaseConvert();
// upperCaseConvert();

btn[0].addEventListener("click", () => upperCaseConvert());
btn[1].addEventListener("click", () => LowerCaseConvert());
btn[2].addEventListener("click", () => capitalizeConvert());
btn[3].addEventListener("click", () => clear());
