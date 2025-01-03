let content = document.getElementById("content");
let btn = document.querySelector("button");

let flowerName = [
  "Rose",
  "Sunflower",
  "Mogra",
  "Lily",
  "whiteRose",
  "pinkRose",
  "Lotus",
  "marigold",
  "Daisy",
  "orchid",
]; //

function numberGenrator() {
  return flowerName[Math.floor(Math.random() * flowerName.length)]; // logic to genrate number
}

btn.addEventListener("click", () => {
  content.innerHTML = numberGenrator();
  //   console.log(numberGenrator());
});
