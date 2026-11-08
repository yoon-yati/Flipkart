
const furnitureBanners = [

    { image: "assets/category/furniture/f1.webp", alt: "Furniture banner 1" },
    { image: "assets/category/furniture/f2.webp", alt: "Furniture banner 2" },
    { image: "assets/category/furniture/f3.webp", alt: "Furniture banner 3" },
    { image: "assets/category/furniture/f4.webp", alt: "Furniture banner 4" },
    { image: "assets/category/furniture/f5.webp", alt: "Furniture banner 5" },
    { image: "assets/category/furniture/f6.webp", alt: "Furniture banner 6" },
    { image: "assets/category/furniture/f7.webp", alt: "Furniture banner 7" },
    { image: "assets/category/furniture/f8.webp", alt: "Furniture banner 8" },
    { image: "assets/category/furniture/f9.webp", alt: "Furniture banner 9" },



];

async function initFurniturePage() {

    console.log("Loading Furniture page...");

        await loadCategoryBanner("furniture");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(furnitureBanners);
    } else {
        console.error("Furniture carousel could not load!");
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

    console.log("Furniture page loaded!");


}

// Register globally
window.initFurniturePage = initFurniturePage;