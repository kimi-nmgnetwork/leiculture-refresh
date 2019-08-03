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
  const hoverImgLink = document.createElement("a");
  hoverImgLink.classList.add("hover-img-link");

  hoverImgContainer.appendChild(hoverImgLink);
  hoverImgContainer.appendChild(hoverImg);
  nav.appendChild(hoverImgContainer);

  // CHANGE THE HOVER IMG TO THE LINK
  const selectedImg = document.querySelector(".hover-img");
  const pageItems = document.querySelectorAll(".page_item");

  // Change this to img links later
  const imgArr = [
    // MAKE SURE THE YOU FIX THE PATH FROM STAGING
    "http://staging.leiculture.com/wp-content/uploads/2019/08/arts_design.jpg",
    "http://staging.leiculture.com/wp-content/uploads/2019/08/culture.jpg",
    "http://staging.leiculture.com/wp-content/uploads/2019/08/fashion.jpg",
    "http://staging.leiculture.com/wp-content/uploads/2019/08/explore.jpg",
    "http://staging.leiculture.com/wp-content/uploads/2019/08/lei_tv.jpg",
    "http://staging.leiculture.com/wp-content/uploads/2019/08/events.jpg",
    "http://staging.leiculture.com/wp-content/uploads/2019/08/guides.jpg",
    "http://staging.leiculture.com/wp-content/uploads/2019/08/subscribe.jpg"
  ];
  let current;

  // SET DEFAULT HOVER IMG
  selectedImg.src =
    "http://staging.leiculture.com/wp-content/uploads/2019/08/arts_design.jpg";

  pageItems.forEach((item, key) => {
    let currentLink;

    item.addEventListener("mouseover", () => {
      current = key;
      currentLink = item.querySelector("a").href;

      imgArr.map((img, key) => {
        if (current == key) {
          selectedImg.src = img;
          hoverImgLink.href = currentLink;
          console.log(hoverImgLink);
        }
      });
    });
  });

  // USE THE OPENING ANIMATIONS
  const heroImg = document.querySelector(".hero-img");
  const scrollCta = document.querySelector(".scroll-cta");
  const heroDescription = document.querySelector(".hero-description");

  heroImg.classList.add("loaded");
  scrollCta.classList.add("loaded");
  heroDescription.classList.add("loaded");
});
