// Helper to wait for all images to load
function imagesLoadedPromise() {
  const images = document.images;
  let loadedCount = 0;

  return new Promise((resolve) => {
    if (images.length === 0) resolve();

    for (let img of images) {
      if (img.complete) {
        loadedCount++;
        if (loadedCount === images.length) resolve();
      } else {
        img.onload = img.onerror = () => {
          loadedCount++;
          if (loadedCount === images.length) resolve();
        };
      }
    }
  });
}

// Now load GSAP safely
window.addEventListener("load", async () => {
  gsap.registerPlugin(ScrollTrigger);

  await imagesLoadedPromise(); // Wait for images

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#item-1",
      start: "-250% 50%",
      end: "10% 50%",
      scrub: true,
      markers: false,
    },
  });

  tl1.to("#item-1", {
    right: "10%",
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#item-2",
      start: "-250% 50%",
      end: "10% 50%",
      scrub: true,
      markers: false,
    },
  });

  tl2.to("#item-2", {
    left: "5%",
  });

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#item-3",
      start: "-250% 50%",
      end: "-30% 50%",
      scrub: true,
      markers: false,
    },
  });

  tl3.to("#item-3", {
    left: "30%",
  });

  ScrollTrigger.refresh(); // Final recalculation
});
