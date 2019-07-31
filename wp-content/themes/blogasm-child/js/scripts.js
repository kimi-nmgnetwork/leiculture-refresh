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

  // Create the img element for the nav link hover
  const nav = document.querySelector("nav");
  const hoverImgContainer = document.createElement("div");
  hoverImgContainer.classList.add("nav-hover-img-container");
  const hoverImg = document.createElement("img");
  hoverImg.classList.add("hover-img");
  hoverImgContainer.appendChild(hoverImg);
  nav.appendChild(hoverImgContainer);

  // CHANGE THE HOVER IMG TO THE LINK
  const selectedImg = document.querySelector(".hover-img");
  const pageItems = document.querySelectorAll(".page_item");

  // Change this to img links later
  const imgArr = ["red", "blue", "green", "orange", "purple", "yellow"];
  let current;

  pageItems.forEach((item, key) => {
    // console.log(`${item.innerText}: ${key}`);
    item.addEventListener("mouseover", () => {
      current = key;

      imgArr.map((img, key) => {
        if (current == key) {
          selectedImg.style.background = img;
        }
      });
    });
  });
});
