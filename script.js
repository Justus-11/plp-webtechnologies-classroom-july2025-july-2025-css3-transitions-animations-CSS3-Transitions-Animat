const box = document.querySelector(".box");
const animateBtn = document.getElementById("animateBtn");

// List of heart colors
const colors = ["steelblue", "tomato", "mediumseagreen", "gold", "purple", "deeppink"];
let currentIndex = 0;

animateBtn.addEventListener("click", () => {
  // Move to next color
  currentIndex = (currentIndex + 1) % colors.length;
  box.style.backgroundColor = colors[currentIndex];
  box.style.setProperty("--heart-color", colors[currentIndex]);
});

function resetBox() {
  currentIndex = 0;
  box.style.backgroundColor = colors[0];
}
