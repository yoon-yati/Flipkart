
const beautyBanners = [

    { image: "assets/category/beauty/b1.webp", alt: "Beauty banner 1" },
    { image: "assets/category/beauty/b2.webp", alt: "Beauty banner 2" },
    { image: "assets/category/beauty/b3.webp", alt: "Beauty banner 3" },
    { image: "assets/category/beauty/b4.webp", alt: "Beauty banner 4" },
    { image: "assets/category/beauty/b5.webp", alt: "Beauty banner 5" },
    { image: "assets/category/beauty/b6.webp", alt: "Beauty banner 6" },
    { image: "assets/category/beauty/b7.webp", alt: "Beauty banner 7" },
    { image: "assets/category/beauty/b8.webp", alt: "Beauty banner 8" },
    { image: "assets/category/beauty/b9.webp", alt: "Beauty banner 9" },



];

async function initBeautyPage() {

    console.log("Loading Beauty page...");

    await loadCategoryBanner("beauty");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(beautyBanners);
    } else {
        console.error("Beauty carousel could not load!");
    }
    // 3. Render promotional banners
    renderPromoBanners("beauty");

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

    console.log("Beauty page loaded!");


}

// Register globally
window.initBeautyPage = initBeautyPage;