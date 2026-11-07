
const sportBanners = [

    { image: "assets/category/sport/s1.webp", alt: "Sports banner 1" },
    { image: "assets/category/sport/s2.webp", alt: "Sports banner 2" },
    { image: "assets/category/sport/s3.webp", alt: "Sports banner 3" },
    { image: "assets/category/sport/s4.webp", alt: "Sports banner 4" },
    { image: "assets/category/sport/s5.webp", alt: "Sports banner 5" },
    { image: "assets/category/sport/s6.webp", alt: "Sports banner 6" },



];

async function initSportPage() {

    console.log("Loading Sports page...");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(sportBanners);
    } else {
        console.error("Sports carousel could not load!");
    }

    // Load other components
    // await Promise.all([
    //     loadLayout("phoneproductlist", "components/phoneproductlist.html"),
    //     loadLayout("watchproductlist", "components/watchproductlist.html"),
    //     loadLayout("spotlight", "components/spotlight.html"),
    //     loadLayout("features", "components/features.html"),
    //     loadLayout("products", "components/products.html")
    // ]);

    if (window.lucide) {
        window.lucide.createIcons();
    }

    console.log("Sports page loaded!");


}

// Register globally
window.initSportPage = initSportPage;