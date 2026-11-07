
const accessorieBanners = [

    { image: "assets/category/accessorie/a1.webp", alt: "Accessorie banner 1" },
    { image: "assets/category/accessorie/a2.webp", alt: "Accessorie banner 2" },
    { image: "assets/category/accessorie/a3.webp", alt: "Accessorie banner 3" },
    { image: "assets/category/accessorie/a4.webp", alt: "Accessorie banner 4" },
    { image: "assets/category/accessorie/a5.webp", alt: "Accessorie banner 5" },



];

async function initAccessoriePage() {

    console.log("Loading Accessorie page...");

    await loadCategoryBanner("accessorie");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(accessorieBanners);
    } else {
        console.error("Electronic carousel could not load!");
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

    console.log("Accessorie page loaded!");


}

// Register globally
window.initAccessoriePage = initAccessoriePage;