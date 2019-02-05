const left = document.querySelector(".left");
const right = document.querySelector(".right");
const header = document.querySelector(".header-body");

left.addEventListener("mouseenter", () => {
  header.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  header.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  header.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  header.classList.remove("hover-right");
});
