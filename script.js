const toggle_btn = document.querySelector(".hero-theme-toggle");
const htmlElement = document.documentElement;
const imgElement = toggle_btn.querySelector(".theme-btn");
const gitbtn = toggle_btn.querySelector(".github-btn");
const locationElement = document.querySelector(".location_svg");
const dropdownArrow = document.querySelector(".dropdown-label img");

var currentTheme = htmlElement.getAttribute("data-theme");

if (currentTheme === "light") {
  imgElement.src = "/public/svg/dark_mode.svg";
  gitbtn.src = "/public/svg/github.svg";
  locationElement.src = "/public/svg/location_dark.svg";
  dropdownArrow.src = "/public/svg/arrow-black.svg";
}

toggle_btn.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    imgElement.src = "/public/svg/light_mode.svg";
    gitbtn.src = "/public/svg/github-white.svg";
    locationElement.src = "/public/svg/location.svg";
    dropdownArrow.src = "/public/svg/arrow-white.svg";
  } else {
    imgElement.src = "/public/svg/dark_mode.svg";
    gitbtn.src = "/public/svg/github.svg";

    locationElement.src = "/public/svg/location_dark.svg";
    dropdownArrow.src = "/public/svg/arrow-black.svg";
  }
});

const zoomableImages = document.querySelectorAll(".zoomable-image");

zoomableImages.forEach((img) => {
  img.addEventListener("click", () => {
    zoomableImages.forEach((other) => {
      if (other !== img) other.classList.remove("fullscreen");
    });

    img.classList.toggle("fullscreen");

    document.body.style.overflow = img.classList.contains("fullscreen")
      ? "hidden"
      : "";
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    zoomableImages.forEach((img) => img.classList.remove("fullscreen"));
    document.body.style.overflow = "";
  }
});

const images = document.querySelectorAll(".zoomable-image");

images.forEach((img) => {
  const wrapper = img.parentElement;

  img.addEventListener("click", () => {
    const isFullscreen = wrapper.classList.contains("fullscreen");

    document
      .querySelectorAll(".zoom-wrapper.fullscreen")
      .forEach((w) => w.classList.remove("fullscreen"));

    if (!isFullscreen) {
      wrapper.classList.add("fullscreen");
      document.body.style.overflow = "hidden";
    } else {
      wrapper.classList.remove("fullscreen");
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document
      .querySelectorAll(".zoom-wrapper.fullscreen")
      .forEach((w) => w.classList.remove("fullscreen"));
    document.body.style.overflow = "";
  }
});

const dropdown = document.querySelector(".dropdown");

const dropdownMenu = () => {
  dropdown.classList.toggle("is-active");
};

dropdown.addEventListener("click", () => {
  dropdownMenu();
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    if (dropdown.classList.contains("is-active")) {
      dropdownMenu();
    }
  }
});

const dropdownLabelText = dropdown.querySelector(".label-text");
const dropdownItems = dropdown.querySelectorAll(".dropdown-item");
const allProjects = document.querySelectorAll(".project");

dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const selectedText = e.target.textContent;
    dropdownLabelText.textContent = selectedText;
    dropdown.classList.remove("is-active");

    allProjects.forEach((project) => {
      if (selectedText === "Software Developer") {
        project.style.display = project.classList.contains("SD") ? "" : "none";
      } else if (selectedText === "Data Analyst") {
        project.style.display = project.classList.contains("DS") ? "" : "none";
      } else {
        project.style.display = "";
      }
    });
  });
});
