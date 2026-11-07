function scrollSpotlight(direction) {
    const carousel = document.getElementById("spotlightCarousel");
    const card = carousel.querySelector(".spotlight-card");

    const gap = window.innerWidth >= 640 ? 20 : 12;
    const distance = card.getBoundingClientRect().width + gap;

    carousel.scrollBy({
        left: direction * distance,
        behavior: "smooth"
    });
}