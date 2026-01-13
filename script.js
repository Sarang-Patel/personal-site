const toggle_btn = document.querySelector(".theme-btn");
const htmlElement = document.documentElement;
const imgElement = document.querySelector(".theme-btn");
const gitbtn = document.querySelector(".github-btn");
const locationElement = document.querySelector(".location_svg");
const dropdownArrow = document.querySelector(".dropdown-label img");
const arrowSide = document.querySelectorAll(".arrowSide");

// var currentTheme = htmlElement.getAttribute("data-theme");

// if (currentTheme === "light") {
//   imgElement.src = "/public/svg/dark_mode.svg";
//   gitbtn.src = "/public/svg/github.svg";
//   locationElement.src = "/public/svg/location_dark.svg";
//   dropdownArrow.src = "/public/svg/arrow-black.svg";
// }

// toggle_btn.addEventListener("click", () => {
//   currentTheme = currentTheme === "light" ? "dark" : "light";

//   htmlElement.setAttribute("data-theme", currentTheme);

//   if (currentTheme === "dark") {
//     toggle_btn.src = "/public/svg/light_mode.svg";
//     gitbtn.src = "/public/svg/github-white.svg";
//     locationElement.src = "/public/svg/location.svg";
//     dropdownArrow.src = "/public/svg/arrow-white.svg";

//     arrowSide.forEach((arrow) => {
//       arrow.src = "/public/svg/sidearrowwhite.svg";
//     });
//   } else {
//     imgElement.src = "/public/svg/dark_mode.svg";
//     gitbtn.src = "/public/svg/github.svg";

//     locationElement.src = "/public/svg/location_dark.svg";
//     dropdownArrow.src = "/public/svg/arrow-black.svg";
//     arrowSide.forEach((arrow) => {
//       arrow.src = "/public/svg/sidearrowblack.svg";
//     });
//   }
// });

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

function filterProjects(selectedText) {
  allProjects.forEach((project) => {
    if (selectedText === "Software Work") {
      project.style.display = project.classList.contains("SD") ? "" : "none";
    } else if (selectedText === "Data Work") {
      project.style.display = project.classList.contains("DS") ? "" : "none";
    } else {
      project.style.display = "";
    }
  });
}

filterProjects(dropdownLabelText.textContent);

dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();

    const selectedText = e.target.textContent;
    dropdownLabelText.textContent = selectedText;
    dropdown.classList.remove("is-active");

    filterProjects(selectedText);
  });
});


// document.querySelector(".resume").addEventListener("click", () => {
//   document.querySelector(".resume-modal").classList.toggle("show");
// });

// // Close the modal when clicking outside of it
// document.addEventListener("click", (e) => {
//   if (
//     !document.querySelector(".resume-modal").contains(e.target) &&
//     !document.querySelector(".resume").contains(e.target)
//   ) {
//     document.querySelector(".resume-modal").classList.remove("show");
//   }
// });
