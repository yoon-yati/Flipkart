
const categoryhomeBanners = [

    { image: "assets/category/categoryhome/h1.webp", alt: "Electronic banner 1" },
    { image: "assets/category/categoryhome/h2.webp", alt: "Electronic banner 2" },
    { image: "assets/category/categoryhome/h3.webp", alt: "Electronic banner 3" },
    { image: "assets/category/categoryhome/h4.webp", alt: "Electronic banner 4" },
    { image: "assets/category/categoryhome/h5.webp", alt: "Electronic banner 5" },
    { image: "assets/category/categoryhome/h6.webp", alt: "Electronic banner 6" },
    { image: "assets/category/categoryhome/h7.webp", alt: "Electronic banner 7" },



];

async function initCategoryhomePage() {

    console.log("Loading Categoryhome page...");

    await loadCategoryBanner("categoryhome");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(categoryhomeBanners);
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

    console.log("Categoryhome page loaded!");


}

// Register globally
window.initCategoryhomePage = initCategoryhomePage;