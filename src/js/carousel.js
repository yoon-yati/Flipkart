
let carouselInterval = null;

function initCarousel(banners) {

    const carousel = document.getElementById("promoCarousel");
    const dotsContainer = document.getElementById("promoDots");
    const prevButton = document.getElementById("promoPrev");
    const nextButton = document.getElementById("promoNext");

    if (!carousel || !dotsContainer) {
        console.error("Carousel elements not found!");
        return;
    }

    if (!banners || banners.length === 0) {
        console.error("No banners available!");
        return;
    }

    // Stop previous carousel if another page initializes it
    clearInterval(carouselInterval);

    let currentSlide = 0;

    // Generate banner HTML dynamically
    carousel.innerHTML = banners.map((banner, index) => `
        <div class="promo-slide flex-none
            w-[85%] sm:w-[65%] md:w-[48%] lg:w-[42%]
            max-w-[575px] aspect-[2.1/1]
            rounded-xl overflow-hidden snap-start">

            <img
                src="${banner.image}"
                alt="${banner.alt || `Promotion ${index + 1}`}"
                class="w-full h-full object-cover"
                loading="${index === 0 ? "eager" : "lazy"}"
            >

        </div>
    `).join("");

    const slides = carousel.querySelectorAll(".promo-slide");

    // Generate dots
    dotsContainer.innerHTML = banners.map((_, index) => `
        <button
            type="button"
            aria-label="Go to banner ${index + 1}"
            class="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300">
        </button>
    `).join("");

    const dots = dotsContainer.querySelectorAll("button");

    // Update active dot
    function updateDots() {

        dots.forEach((dot, index) => {

            dot.className = index === currentSlide
                ? "w-6 h-2 rounded-full bg-blue-600 transition-all duration-300"
                : "w-2 h-2 rounded-full bg-gray-300 transition-all duration-300";

        });

    }

    // Go to selected slide
    function goToSlide(index) {

        currentSlide = (index + slides.length) % slides.length;

        carousel.scrollTo({
            left: slides[currentSlide].offsetLeft - carousel.offsetLeft,
            behavior: "smooth"
        });

        updateDots();
    }

    // Previous button
    prevButton.onclick = () => {
        goToSlide(currentSlide - 1);
        restartAutoSlide();
    };

    // Next button
    nextButton.onclick = () => {
        goToSlide(currentSlide + 1);
        restartAutoSlide();
    };

    // Dot click
    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {
            goToSlide(index);
            restartAutoSlide();
        });

    });

    // Autoplay
    function startAutoSlide() {

        clearInterval(carouselInterval);

        if (slides.length <= 1) return;

        carouselInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);

    }

    function restartAutoSlide() {
        startAutoSlide();
    }

    // Pause on hover
    carousel.onmouseenter = () => clearInterval(carouselInterval);
    carousel.onmouseleave = startAutoSlide;

    // Initialize
    goToSlide(0);
    startAutoSlide();

    console.log("Carousel initialized:", banners.length, "banners");
}
