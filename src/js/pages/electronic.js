
const electronicBanners = [

    { image: "assets/category/electronic/e1.webp", alt: "Electronic banner 1" },
    { image: "assets/category/electronic/e2.webp", alt: "Electronic banner 2" },
    { image: "assets/category/electronic/e3.webp", alt: "Electronic banner 3" },
    { image: "assets/category/electronic/e4.webp", alt: "Electronic banner 4" },
    { image: "assets/category/electronic/e5.webp", alt: "Electronic banner 5" },
    { image: "assets/category/electronic/e6.webp", alt: "Electronic banner 6" },
    { image: "assets/category/electronic/e7.webp", alt: "Electronic banner 7" },
    { image: "assets/category/electronic/e8.webp", alt: "Electronicn banner 8" },
    { image: "assets/category/electronic/e9.webp", alt: "Electronic banner 9" },



];

async function initElectronicPage() {

    console.log("Loading Electronic page...");

    await loadCategoryBanner("electronic");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(electronicBanners);
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

    console.log("Electronic page loaded!");


}

// Register globally
window.initElectronicPage = initElectronicPage;