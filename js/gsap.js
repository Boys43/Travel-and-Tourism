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

window.addEventListener("load", async () => {
  gsap.registerPlugin(ScrollTrigger);
  await imagesLoadedPromise();

  // ✅ Initialize Locomotive Scroll
  const scrollContainer = document.querySelector("[data-scroll-container]");

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
  });

  // ✅ Tell ScrollTrigger to use locomotive-scroll for scroll values
  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed",
  });

  // ✅ Update ScrollTrigger when Locomotive updates
  locoScroll.on("scroll", ScrollTrigger.update);

  // ✅ GSAP Timelines using ScrollTrigger
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#item-1",
      start: "-250% 50%",
      end: "10% 50%",
      scrub: true,
      markers: false,
      scroller: scrollContainer, // Important!
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
      scroller: scrollContainer,
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
      scroller: scrollContainer,
    },
  });

  tl3.to("#item-3", {
    left: "30%",
  });

  // ✅ Refresh everything after locomotive is ready
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
});
