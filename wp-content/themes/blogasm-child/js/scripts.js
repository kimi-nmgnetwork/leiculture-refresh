// GET RID OF ALL WIDOWS
const widowSlayer = () => {
  const pTag = document.querySelectorAll("p");

  pTag.forEach(tag => {
    const words = tag.innerHTML.split(" ");
    const lastWordsList = words.slice(-1) && words.splice(-2);
    tag.innerHTML = words.join(" ") + " " + lastWordsList.join("&nbsp;");
  });
};

// CREATE NAVIGATION
const createNav = () => {
  // REMOVE OVERLAY IF BURGER X IS CLICKED
  const burgerMenu = document.querySelector(".hamburger-menu");
  const overlay = document.querySelector(".body-overlay");

  // DISABLE OVERFLOW HERO IMG WHEN NAV IS TOGGLED
  const overflowHeroImg = document.querySelector(".hero-img");

  burgerMenu.addEventListener("click", () => {
    if (burgerMenu.classList.contains("cross")) {
      overlay.classList.add("is-active");

      if (overflowHeroImg) {
        overflowHeroImg.style.display = "none";
      }
    } else {
      overlay.classList.remove("is-active");
      if (overflowHeroImg) {
        overflowHeroImg.style.display = "block";
      }
    }
  });

  // CREATE INITAL NAV FOR HOME PAGE
  // todo GET STYLES AND EVERYTHING WORKING
  const bodyTag = document.querySelector("body");
  if (bodyTag.classList.contains("home")) {
    burgerMenu.classList.add("cross");
    overlay.classList.add("is-active");

    return;
  }

  // CREATE THE IMG ELEMENT FOR THE NAV LINK HOVER
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

  // ------------------------------------------------------------------------------
  // CHANGE THE IMAGES FOR THE NAVIGATION HERE
  // - the order of the links matter as the match up with the index in the nav
  // - the first link will be the first img when you hover over arts and design
  // - remember to also change the default image below
  // ------------------------------------------------------------------------------
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

  // SET DEFAULT HOVER IMG
  selectedImg.src =
    "http://staging.leiculture.com/wp-content/uploads/2019/08/arts_design.jpg";

  let current;

  pageItems.forEach((item, key) => {
    let currentLink;

    item.addEventListener("mouseover", () => {
      current = key;
      currentLink = item.querySelector("a").href;

      imgArr.map((img, key) => {
        if (current == key) {
          selectedImg.src = img;
          hoverImgLink.href = currentLink;
        }
      });
    });
  });
};

// USE THE OPENING ANIMATIONS
const opAnim = () => {
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
};

// LEI TV HOVER STATE
const leiHover = () => {
  const sectionTags = document.querySelectorAll("section");

  // ------------------------------------------------------------------------------
  // CHANGE THE VIDEO FOR LEI TV HERE
  // - each video has comment left what index of video it is
  // - replace the link only to change the video
  // - remember to also change the default video below
  // ------------------------------------------------------------------------------

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
      // THIS IS THE DEFAULT BACKGROUND VIDEO FOR LEI TV
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
};

// CREATE DARK MODE
const darkMode = () => {
  // CHANGE MENU TO DARK MODE
  const isDark = document.querySelectorAll(".is-dark");
  const footerTag = document.querySelectorAll("footer");
  const headerTag = document.querySelector("header");
  const customLogoLink = document.querySelector(".custom-logo-link img");
  let revealPoint = 150;

  function changeNavColor(operation, headerClass, logoSrc) {
    if (operation === "add") {
      headerTag.classList.add(headerClass);
    } else if (operation === "remove") {
      headerTag.classList.remove(headerClass);
    }

    customLogoLink.src = logoSrc;
    customLogoLink.srcset = logoSrc;
  }

  // HANDLE PAGES THAT HAVE is-dark CLASS
  isDark.forEach(event => {
    if (event.classList.contains("is-dark")) {
      changeNavColor(
        "add",
        "transparent",
        "http://staging.leiculture.com/wp-content/uploads/2019/08/lei-white-logo.png"
      );
    }
  });

  // HANDLE NAV CHANGE IF FOOTER IS SCROLL OVER
  window.addEventListener("scroll", () => {
    let windowHeight = window.innerHeight;
    let revealTop = footerTag.getClientBoundingRect().top;
    let revealBottom = footerTag.getClientBoundingRect().bottom;

    if (revealTop < windowHeight - revealPoint) {
      changeNavColor(
        "add",
        "dark-mode",
        "http://staging.leiculture.com/wp-content/uploads/2019/08/lei-white-logo.png"
      );
      console.log("revealed");
    } else {
      changeNavColor(
        "remove",
        "dark-mode",
        "http://staging.leiculture.com/wp-content/uploads/2019/08/cropped-lei-01-1.png"
      );
      console.log("not revealed");
    }
  });
};

// RENDER THEM WHEN THE DOM IS READY
document.addEventListener("DOMContentLoaded", () => {
  widowSlayer();
  createNav();
  opAnim();
  leiHover();
  darkMode();
});
