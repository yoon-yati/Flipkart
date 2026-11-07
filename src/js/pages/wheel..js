
const wheelBanners = [

    { image: "assets/category/wheel/w1.webp", alt: "Wheel banner 1" },
    { image: "assets/category/wheel/w2.webp", alt: "Wheel banner 2" },
    { image: "assets/category/wheel/w3.webp", alt: "Wheel banner 3" },
    { image: "assets/category/wheel/w4.webp", alt: "Wheel banner 4" },
    { image: "assets/category/wheel/w5.webp", alt: "Wheel banner 5" },



];

async function initWheelPage() {

    console.log("Loading Wheel page...");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(wheelBanners);
    } else {
        console.error("Wheel carousel could not load!");
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

    console.log("Wheel page loaded!");


}

// Register globally
window.initWheelPage = initWheelPage;