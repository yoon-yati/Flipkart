
const bookBanners = [

    { image: "assets/category/book/b1.webp", alt: "Book banner 1" },
    { image: "assets/category/book/b2.webp", alt: "Book banner 2" },



];

async function initBookPage() {

    console.log("Loading Book page...");

    await loadCategoryBanner("book");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(bookBanners);
    } else {
        console.error("Book carousel could not load!");
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

    console.log("Book page loaded!");


}

// Register globally
window.initEBookPage = initBookPage;