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

      if (tag.classList.contains("lei-category")) {
        scrollCta.classList.add("loaded");
        heroDescription.classList.add("loaded");
      }
    }
  });

  // LEI TV HOVER STATE
  const sectionTags = document.querySelectorAll("section");

  sectionTags.forEach(section => {
    if (section.id === "lei-tv-home") {
      // CREATE BACKGROUD VIDEO ELEMENT
      const videoBkg = document.createElement("video");
      videoBkg.classList.add("lei-tv-video-bkg");
      videoBkg.autoplay = true;
      videoBkg.setAttribute("muted", "");
      videoBkg.muted = true;
      videoBkg.playsinline = true;
      videoBkg.controls = false;
      videoBkg.loop = true;
      videoBkg.setAttribute("playsinline", "");
      videoBkg.src =
        "http://staging.leiculture.com/wp-content/uploads/2019/08/Flowers-7924-copy.mp4";
      section.appendChild(videoBkg);

      const tvColumns = document.querySelectorAll(
        ".tv-bottom-row .tv-hero-column"
      );

      tvColumns.forEach((column, index) => {
        function revealVideo(item, link) {
          item.classList.remove("fadeOut");
          item.style.opacity = "0";
          item.src = link;
          item.classList.add("fadeIn");

          setTimeout(() => {
            item.classList.remove("fadeIn");
            item.style.opacity = "1";
          }, 1700);
        }

        column.addEventListener("mouseleave", () => {
          videoBkg.classList.add("fadeOut");
        });

        // CHANGE ON SCROLL MOBILE

        column.addEventListener("scroll", event => {
          console.log(event.currentTarget.scrollLeft);
        });

        // CHANGE ON HOVER
        column.addEventListener("mouseenter", () => {
          if (index === 0) {
            // CHANGE FOR FIRST VID
            revealVideo(
              videoBkg,
              "http://staging.leiculture.com/wp-content/uploads/2019/08/Flowers-7924-copy.mp4"
            );
          } else if (index === 1) {
            // CHANGE FOR SECOND VID
            revealVideo(
              videoBkg,
              "http://staging.leiculture.com/wp-content/uploads/2019/08/River-14205.mp4"
            );
          } else if (index === 2) {
            // CHANGE FOR THIRD VID

            revealVideo(
              videoBkg,
              "http://staging.leiculture.com/wp-content/uploads/2019/08/River-6815.mp4"
            );
          }
        });
      });
    }
  });
});

window.addEventListener("scroll", () => {
  // Change Menu To Dark Mode
  const sectionOrFooter = document.querySelectorAll("section, footer");

  sectionOrFooter.forEach(event => {
    if (event.classList.contains("is-dark")) {
      console.log(event.scrollTop);
    }
  });
});
