let links = document.querySelector(".links");
let icon = document.querySelector(".icon");
let link1 = document.querySelector(".feat1");
let link2 = document.querySelector(".feat2");
let links1 = document.querySelector(".feat1");
let links2 = document.querySelector(".feat2");
let overlay = document.querySelector(".overlay");
let arrow1 = document.querySelector(".arrow1");
let arrow2 = document.querySelector(".arrow2");

icon.addEventListener("click", () => {
  links.classList.toggle("show");
  icon.classList.toggle("active");
  overlay.classList.toggle("show-overlay");
});

link1.addEventListener("click", () => {
  links1.classList.toggle("show-links");
  arrow1.classList.toggle("change");
});

link2.addEventListener("click", () => {
  links2.classList.toggle("active-links");
  arrow2.classList.toggle("change");
});

overlay.addEventListener("click", () => {
  links.classList.toggle("show");
  overlay.classList.toggle("show-overlay");
  icon.classList.toggle("active");
});
