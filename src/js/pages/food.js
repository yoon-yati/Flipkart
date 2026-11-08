
const foodBanners = [

    { image: "assets/category/food/f1.webp", alt: "Food banner 1" },
    { image: "assets/category/food/f2.webp", alt: "Food banner 2" },
    { image: "assets/category/food/f3.webp", alt: "Food banner 3" },
    { image: "assets/category/food/f4.webp", alt: "Food banner 4" },
    { image: "assets/category/food/f5.webp", alt: "Food banner 5" },
    { image: "assets/category/food/f6.webp", alt: "Food banner 6" },
    { image: "assets/category/food/f7.webp", alt: "Food banner 7" },
    { image: "assets/category/food/f8.webp", alt: "Food banner 8" },
    { image: "assets/category/food/f9.webp", alt: "Food banner 9" },



];

async function initFoodPage() {

    console.log("Loading Food page...");

    await loadCategoryBanner("food");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(foodBanners);
    } else {
        console.error("Food carousel could not load!");
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

    console.log("Food page loaded!");


}

// Register globally
window.initFoodPage = initFoodPage;