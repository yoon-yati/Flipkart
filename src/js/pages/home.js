
const homeBanners = [
    { image: "assets/promotion/carousel/carousel1.webp", alt: "Home banner 1" },
    { image: "assets/promotion/carousel/carousel2.webp", alt: "Home banner 2" },
    { image: "assets/promotion/carousel/carousel3.png", alt: "Home banner 3" },
    { image: "assets/promotion/carousel/carousel4.webp", alt: "Home banner 4" },
    { image: "assets/promotion/carousel/carousel5.png", alt: "Home banner 5" },
    { image: "assets/promotion/carousel/carousel6.webp", alt: "Home banner 6" },
    { image: "assets/promotion/carousel/carousel7.webp", alt: "Home banner 7" },
    { image: "assets/promotion/carousel/carousel8.webp", alt: "Home banner 8" },
    { image: "assets/promotion/carousel/carousel9.webp", alt: "Home banner 9" },
    { image: "assets/promotion/carousel/carousel10.webp", alt: "Home banner 10" },
    { image: "assets/promotion/carousel/carousel11.webp", alt: "Home banner 11" },
    { image: "assets/promotion/carousel/carousel12.webp", alt: "Home banner 12" },
    { image: "assets/promotion/carousel/carousel13.webp", alt: "Home banner 13" },
    { image: "assets/promotion/carousel/carousel14.webp", alt: "Home banner 14" },
    { image: "assets/promotion/carousel/carousel15.webp", alt: "Home banner 15" },
    { image: "assets/promotion/carousel/carousel16.webp", alt: "Home banner 16" },
    { image: "assets/promotion/carousel/carousel17.webp", alt: "Home banner 17" }
];

async function initHomePage() {

    console.log("Loading Home page...");

    // Load carousel
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(homeBanners);
    }

    // Load other components
    await Promise.all([
        loadLayout("phoneproductlist", "components/phoneproductlist.html"),
        loadLayout("watchproductlist", "components/watchproductlist.html"),
        loadLayout("spotlight", "components/spotlight.html"),
        loadLayout("features", "components/features.html"),
        loadLayout("products", "components/products.html")
    ]);

    if (window.lucide) {
        window.lucide.createIcons();
    }

    console.log("Home page loaded!");
}

// Register globally
window.initHomePage = initHomePage;
