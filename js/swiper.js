const swiper1 = new Swiper(".testimonials-carousel", {
    freeMode: true,
    grabCursor: true,
    speed: 3000,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});


// To auto move the swiper
setTimeout(() => {
    setInterval(() => {
        swiper1.slideNext();
    }, 5000);
}, 3000);