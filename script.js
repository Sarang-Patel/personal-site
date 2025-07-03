const toggle_btn = document.querySelector(".hero-theme-toggle");
const htmlElement = document.documentElement;
const imgElement = toggle_btn.querySelector("img");
const locationElement = document.querySelector(".location_svg");

var currentTheme = htmlElement.getAttribute("data-theme");


if (currentTheme === "light") {
  imgElement.src = "/public/svg/dark_mode.svg";
  locationElement.src = "/public/svg/location_dark.svg";
}

toggle_btn.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    imgElement.src = "/public/svg/light_mode.svg";
    locationElement.src = "/public/svg/location.svg";

  } else {
    imgElement.src = "/public/svg/dark_mode.svg";
    locationElement.src = "/public/svg/location_dark.svg";

  }
});

const zoomableImages = document.querySelectorAll('.zoomable-image');

zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
      zoomableImages.forEach(other => {
        if (other !== img) other.classList.remove('fullscreen');
      });

      img.classList.toggle('fullscreen');

      document.body.style.overflow = img.classList.contains('fullscreen') ? 'hidden' : '';
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      zoomableImages.forEach(img => img.classList.remove('fullscreen'));
      document.body.style.overflow = '';
    }
  });


  const images = document.querySelectorAll('.zoomable-image');

images.forEach(img => {
  const wrapper = img.parentElement;

  img.addEventListener('click', () => {
    const isFullscreen = wrapper.classList.contains('fullscreen');

    // Remove fullscreen from all other wrappers
    document.querySelectorAll('.zoom-wrapper.fullscreen').forEach(w => w.classList.remove('fullscreen'));

    if (!isFullscreen) {
      wrapper.classList.add('fullscreen');
      document.body.style.overflow = 'hidden';
    } else {
      wrapper.classList.remove('fullscreen');
      document.body.style.overflow = '';
    }
  });
});

// Optional: Exit fullscreen on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.zoom-wrapper.fullscreen').forEach(w => w.classList.remove('fullscreen'));
    document.body.style.overflow = '';
  }
});
