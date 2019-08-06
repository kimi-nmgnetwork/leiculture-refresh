document.addEventListener("DOMContentLoaded", () => {
  // GET RID OF ALL WIDOWS
  const pTag = document.querySelectorAll("p");

  pTag.forEach(tag => {
    // 1. Split all the words from the p tag from anytime there's a space
    const words = tag.innerHTML.split(" ");
    // 2. Find the last space and insert a &nbsp; in it's place
    const lastWordsList = words.slice(-1) && words.splice(-2);
    // 3. Join the last two togehter with a &nbsp;
    tag.innerHTML = words.join(" ") + " " + lastWordsList.join("&nbsp;");
  });

  // Remove overlay if burger x is clicked
  const burgerMenu = document.querySelector(".hamburger-menu");
  const overlay = document.querySelector(".body-overlay");

  // Disable overflow hero img when nav is toggled
  const overflowHeroImg = document.querySelector(".hero-img");

  burgerMenu.addEventListener("click", () => {
    if (burgerMenu.classList.contains("cross")) {
      overlay.classList.add("is-active");
      overflowHeroImg.style.display = "none";
    } else {
      overlay.classList.remove("is-active");
      overflowHeroImg.style.display = "block";
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
  const imgTags = document.querySelectorAll("div");

  const heroImg = document.querySelector(".hero-img");
  const scrollCta = document.querySelector(".scroll-cta");
  const heroDescription = document.querySelector(".hero-description");

  imgTags.forEach(tag => {
    if (tag.classList.contains("hero-img")) {
      heroImg.classList.add("loaded");
      scrollCta.classList.add("loaded");
      heroDescription.classList.add("loaded");
    } else {
      console.log("not working");
    }
  });
});
