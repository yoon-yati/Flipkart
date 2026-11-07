
const applianceBanners = [

    { image: "assets/category/appliance/a1.png", alt: "Appliance banner 1" },
    { image: "assets/category/appliance/a2.webp", alt: "Appliance banner 2" },
    { image: "assets/category/appliance/a3.webp", alt: "Appliance banner 3" },
    { image: "assets/category/appliance/a4.webp", alt: "Appliance banner 4" },
    { image: "assets/category/appliance/a5.webp", alt: "Appliance banner 5" },
    { image: "assets/category/appliance/a6.webp", alt: "Appliance banner 6" },
    { image: "assets/category/appliance/a7.webp", alt: "Appliance banner 7" },
    { image: "assets/category/appliance/a8.webp", alt: "Appliance banner 8" },
    { image: "assets/category/appliance/a9.webp", alt: "Appliance banner 9" },
    { image: "assets/category/appliance/a10.webp", alt: "Appliance banner 10" },



];

async function initAppliancePage() {

    console.log("Loading Appliance page...");

    await loadCategoryBanner("appliance");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(applianceBanners);
    } else {
        console.error("Appliance carousel could not load!");
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

    console.log("Appliance page loaded!");


}

// Register globally
window.initAppliancePage = initAppliancePage;