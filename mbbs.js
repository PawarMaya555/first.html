function toggleAccordion(contentId, arrowId) {
  const content = document.getElementById(contentId);
  const arrow = document.getElementById(arrowId);
  if (content.style.display === "block") {
    // Close the accordion
    content.style.display = "none";
    arrow.textContent = "▼"; // Down arrow
  } else {
    // Open the accordion
    content.style.display = "block";
    arrow.textContent = "▲"; // Up arrow
  }
}

//  applybtn*************
let applybtn = document.querySelector("#Applybtn");
let applyForm = document.querySelector("#header6");

console.log(applybtn);

applybtn.addEventListener("click", () => {
  applyForm.scrollIntoView({ behavior: "smooth" });
});
