// Lazy load images
document.querySelectorAll("img").forEach((img) => {
  img.setAttribute("loading", "lazy");
});

// Sticky navbar
const nav = document.getElementById("navigation");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky-nav", window.scrollY > 70);
  });
}

// Highlight active nav link
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#nav-wrapper li a").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.parentElement.classList.add("active-link");
    }
  });
});

// Hamburger menu
function toggleMenu() {
  const nav = document.getElementById("navigation");
  if (nav) nav.classList.toggle("active");
}

// Intersection observer for animations and counters
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      const id = entry.target.id;
      const values = {
        streak1: 34,
        streak2: 1000,
        streak3: 250,
        streak4: 13,
        exp: 10,
        happy: 1000,
        destiny: 30,
      };

      if (values[id] !== undefined) {
        setTimeout(() => {
          entry.target.textContent = values[id];
        }, 700);
      }
    }
  });
});

[".odometer", ".fade-in-on-scroll", ".fade-in-from-right", ".fade-in"].forEach(
  (selector) => {
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  }
);

// Tour card popup
const cards = document.querySelectorAll(".img-frame");
const popup = document.getElementById("tour-popup");
const destinationTitle = popup?.querySelector(".popup-destination");
const closeBtn = popup?.querySelector(".close-btn");
const mapFrame = popup?.querySelector(".popup-map");
const overlay = document.querySelector(".main-overlay");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const destination = card
      .closest(".tour-cards")
      ?.querySelector(".destination")
      ?.innerText.trim();
    if (!popup || !mapFrame || !overlay || !destinationTitle || !destination)
      return;

    destinationTitle.textContent = destination;

    const mapQuery = encodeURIComponent(destination + ", Pakistan");
    mapFrame.src = `https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    popup.classList.remove("hidden");
    overlay.classList.add("active");
  });
});

closeBtn?.addEventListener("click", () => {
  popup?.classList.add("hidden");
  overlay?.classList.remove("active");
  if (mapFrame) mapFrame.src = "";
});

overlay?.addEventListener("click", () => {
  popup?.classList.add("hidden");
  overlay?.classList.remove("active");
  if (mapFrame) mapFrame.src = "";
});

// WhatsApp toggle
const whatsappIcon = document.querySelector("#whatsapp-icon img");
const whatsappMain = document.getElementById("whatsapp-main");

if (whatsappIcon && whatsappMain) {
  whatsappIcon.addEventListener("click", () => {
    whatsappMain.classList.toggle("toggle-display");
  });
}

// Remove fade-in on mobile
function updateClassesBasedOnScreenSize() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    document
      .querySelectorAll(".fade-in")
      .forEach((el) => el.classList.remove("fade-in"));
  }
}
updateClassesBasedOnScreenSize();
window.addEventListener("resize", updateClassesBasedOnScreenSize);

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Scroll to top
const scrollTopBtn = document.getElementById("up");
if (scrollTopBtn) {
  scrollTopBtn.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
}

// Button click redirection
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach((btn) => {
    const text = btn.textContent.trim().toLowerCase();
    if (text.includes("book now")) {
      btn.onclick = () => (window.location.href = "persnol-trip.html");
    }
    if (text.includes("tours")) {
      btn.onclick = () => (window.location.href = "packages.html");
    }
  });
});

// FAQs Accordian

function toggleFaq(element) {
  const card = element.parentElement;
  const allCards = document.querySelectorAll(".faq-card");

  // Collapse all others
  allCards.forEach((c) => {
    if (c !== card) c.classList.remove("active");
  });

  // Toggle current
  card.classList.toggle("active");
}



