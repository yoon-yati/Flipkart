
const fashionBanners = [
    { image: "assets/category/fashion/carousel/f1.webp", alt: "Fashion banner 1" },
    { image: "assets/category/fashion/carousel/f2.webp", alt: "Fashion banner 2" },
    { image: "assets/category/fashion/carousel/f3.webp", alt: "Fashion banner 3" },
    { image: "assets/category/fashion/carousel/f4.webp", alt: "Fashion banner 4" },
    { image: "assets/category/fashion/carousel/f5.webp", alt: "Fashion banner 5" },
    { image: "assets/category/fashion/carousel/f6.webp", alt: "Fashion banner 6" },
    { image: "assets/category/fashion/carousel/f7.webp", alt: "Fashion banner 7" },
    { image: "assets/category/fashion/carousel/f8.webp", alt: "Fashion banner 8" },
    { image: "assets/category/fashion/carousel/f9.webp", alt: "Fashion banner 9" },
    { image: "assets/category/fashion/carousel/f10.webp", alt: "Fashion banner 10" }
];

async function initFashionPage() {

    console.log("Loading Fashion page...");

    await loadCategoryBanner("fashion");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(fashionBanners);
    } else {
        console.error("Fashion carousel could not load!");
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }

    console.log("Fashion page loaded!");
}

// Register globally
window.initFashionPage = initFashionPage;
