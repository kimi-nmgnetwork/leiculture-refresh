// Remove overlay if burger x is clicked
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".hamburger-menu");
  const overlay = document.querySelector(".body-overlay");

  burgerMenu.addEventListener("click", () => {
    if (burgerMenu.classList.contains("cross")) {
      overlay.classList.add("is-active");
    } else {
      overlay.classList.remove("is-active");
    }
  });
});
