const toggle_btn = document.querySelector(".hero-theme-toggle");
const htmlElement = document.documentElement;
const imgElement = toggle_btn.querySelector("img");

var currentTheme = htmlElement.getAttribute("data-theme");


if (currentTheme === "light") {
  imgElement.src = "/public/svg/dark_mode.svg";
}

toggle_btn.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    imgElement.src = "/public/svg/light_mode.svg";
  } else {
    imgElement.src = "/public/svg/dark_mode.svg";
  }
});
