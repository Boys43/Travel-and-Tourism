// Adding Lazy loading for images
const images = document.querySelectorAll("img");

images.forEach((lazyLoad) => {
  lazyLoad.setAttribute("loading", "lazy");
});

// Sticky navbar
const nav = document.getElementById("navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    nav.classList.add("sticky-nav");
  } else {
    nav.classList.remove("sticky-nav");
  }
});
// Load when reaches viewport

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      if (entry.target.id === "streak1") {
        setTimeout(() => {
          entry.target.textContent = 34;
        }, 700);
      }
      if (entry.target.id === "streak2") {
        setTimeout(() => {
          entry.target.innerHTML = 1000;
        }, 700);
      }
      if (entry.target.id === "streak3") {
        setTimeout(() => {
          entry.target.innerHTML = 250;
        }, 700);
      }
      if (entry.target.id === "streak4") {
        setTimeout(() => {
          entry.target.innerHTML = 13;
        }, 700);
      }
      if (entry.target.id === "exp") {
        setTimeout(() => {
          entry.target.innerHTML = 10;
        }, 700);
      }
      if (entry.target.id === "happy") {
        setTimeout(() => {
          entry.target.innerHTML = 1000;
        }, 700);
      }
      if (entry.target.id === "destiny") {
        setTimeout(() => {
          entry.target.innerHTML = 30;
        }, 700);
      }
    }
  });
});

document.querySelectorAll(".odometer").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-in-on-scroll").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-in-from-right").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Intractivity for cards

const cards = document.querySelectorAll(".img-frame");
const popup = document.getElementById("tour-popup");
const closeBtn = popup.querySelector(".close-btn");
const destinationTitle = popup.querySelector(".popup-destination");
const mapFrame = popup.querySelector(".popup-map");
const overlay = document.querySelector(".main-overlay");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const destination = card
      .closest(".tour-cards")
      .querySelector(".destination")
      .innerText.trim();
    destinationTitle.textContent = destination;

    // Encode and insert a static map image using the destination name
    const mapQuery = encodeURIComponent(destination + ", Pakistan");
    const staticMapURL = `https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    mapFrame.src = staticMapURL;

    // Show popup and blur background
    popup.classList.remove("hidden");
    overlay.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  overlay.classList.remove("active");
  mapFrame.src = ""; // Clear map
});

// also hide the map when the outside is clicked
overlay.onclick = () => {
  popup.classList.add("hidden");
  overlay.classList.remove("active");
  mapFrame.src = ""; // Clear map
};

// WhatsApp Model

document.querySelector("#whatsapp-icon img").addEventListener("click", () => {
  document.getElementById("whatsapp-main").classList.toggle("toggle-display");
});
