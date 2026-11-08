
const toyBanners = [

    { image: "assets/category/toy/t1.webp", alt: "Toy banner 1" },
    { image: "assets/category/toy/t2.webp", alt: "Toy banner 2" },
    { image: "assets/category/toy/t3.webp", alt: "Toy banner 3" },
    { image: "assets/category/toy/t4.webp", alt: "Toy banner 4" },
    { image: "assets/category/toy/t5.webp", alt: "Toy banner 5" },
    { image: "assets/category/toy/t6.webp", alt: "Toy banner 6" },
    { image: "assets/category/toy/t7.webp", alt: "Toy banner 7" },
    { image: "assets/category/toy/t8.webp", alt: "Toy banner 8" },



];

async function initToyPage() {

    console.log("Loading Toy page...");

    await loadCategoryBanner("toy");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(toyBanners);
    } else {
        console.error("Toy carousel could not load!");
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

    console.log("Toy page loaded!");


}

// Register globally
window.initToyPage = initToyPage;