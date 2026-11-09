
const mobileBanners = [

    { image: "assets/category/mobile/m1.webp", alt: "Mobile banner 1" },
    { image: "assets/category/mobile/m2.webp", alt: "Mobile banner 2" },
    { image: "assets/category/mobile/m3.webp", alt: "Mobile banner 3" },
    { image: "assets/category/mobile/m4.webp", alt: "Mobile banner 4" },
    { image: "assets/category/mobile/m5.webp", alt: "Mobile banner 5" },
    { image: "assets/category/mobile/m6.webp", alt: "Mobile banner 6" },
    { image: "assets/category/mobile/m7.webp", alt: "Mobile banner 7" },
    { image: "assets/category/mobile/m8.webp", alt: "Mobile banner 8" },
    { image: "assets/category/mobile/m9.webp", alt: "Mobile banner 9" },
    { image: "assets/category/mobile/m10.webp", alt: "Mobile banner 10" },



];

async function initMobilePage() {

    console.log("Loading Mobile page...");

    await loadCategoryBanner("mobile");

    // Load fashion carousel HTML
    const carouselLoaded = await loadLayout(
        "carousel",
        "components/carousel.html"
    );

    if (carouselLoaded) {
        initCarousel(mobileBanners);
    } else {
        console.error("Mobile carousel could not load!");
    }

    // Load other components
    // await Promise.all([
    //     loadLayout("phoneproductlist", "components/phoneproductlist.html"),
    //     loadLayout("watchproductlist", "components/watchproductlist.html"),
    //     loadLayout("spotlight", "components/spotlight.html"),
    //     loadLayout("features", "components/features.html"),
    //     loadLayout("products", "components/products.html")
    // ]);

    // 3. Render promotional banners
    renderPromoBanners("mobile");

    if (window.lucide) {
        window.lucide.createIcons();
    }

    console.log("Mobile page loaded!");


}

// Register globally
window.initMobilePage = initMobilePage;
