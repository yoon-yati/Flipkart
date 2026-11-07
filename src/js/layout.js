
// =====================================
// LOAD HTML COMPONENTS
// =====================================

async function loadLayout(elementId, filePath) {
    const element = document.getElementById(elementId);

    if (!element) {
        console.error(`Element #${elementId} not found`);
        return false;
    }

    try {
        const response = await fetch(filePath);


        if (!response.ok) {
            throw new Error(`Cannot load ${filePath}: ${response.status}`);
        }

        element.innerHTML = await response.text();

        // Initialize Lucide icons after loading HTML
        if (window.lucide) {
            window.lucide.createIcons();
        }

        return true;

    } catch (error) {
        console.error("Layout loading error:", error);
        return false;
    }
}

// Make globally accessible
window.loadLayout = loadLayout;


// =====================================
// PAGE CONFIGURATION
// =====================================

const pages = {
    foryou: {
        file: "foryou.html",
        init: "initHomePage"
    },

    fashion: {
        file: "fashion.html",
        init: "initFashionPage"
    },

    mobile: {
        file: "mobile.html",
        init: "initMobilePage"
    },

    electronic: {
        file: "electronic.html",
        init: "initElectronicPage"
    },

    beauty: {
        file: "beauty.html",
        init: "initBeautyPage"
    },

    categoryhome: {
        file: "categoryhome.html",
        init: "initCategoryhomePage"
    },

    appliance: {
        file: "appliance.html",
        init: "initAppliancePage"
    },

    toy: {
        file: "toy.html",
        init: "initToyPage"
    },

    food: {
        file: "food.html",
        init: "initFoodPage"
    },

    accessorie: {
        file: "accessorie.html",
        init: "initAccessoriePage"
    },

    sport: {
        file: "sport.html",
        init: "initSportPage"
    },

    furniture: {
        file: "furniture.html",
        init: "initFurniturePage"
    },

    book: {
        file: "book.html",
        init: "initBookPage"
    },

    wheel: {
        file: "wheel.html",
        init: "initWheelPage"
    },


};


// =====================================
// LOAD SELECTED PAGE
// =====================================

async function loadPage(pageName) {

    const selectedPage = pages[pageName] ? pageName : "foryou";

    const page = pages[selectedPage];

    // Load page HTML
    const loaded = await loadLayout(
        "page-content",
        page.file
    );

    if (!loaded) return;

    // Find initialization function
    const initFunction = window[page.init];

    if (typeof initFunction !== "function") {
        console.error(`${page.init} is not defined!`);
        return;
    }

    // Initialize selected page
    await initFunction();

    // Update active category
    document.querySelectorAll(".category-link").forEach(link => {

        const active = link.dataset.page === selectedPage;

        link.classList.toggle("text-blue-600", active);
        link.classList.toggle("font-bold", active);
        link.classList.toggle("text-gray-700", !active);

    });

    console.log("Current page:", selectedPage);
}


// =====================================
// INITIALIZE WEBSITE
// =====================================

async function initWebsite() {

    // Load shared layouts
    await loadLayout("header", "layouts/header.html");

    await loadLayout("navbar", "layouts/navbar.html");

    await loadLayout("categorybar", "layouts/categorybar.html");


    // Category navigation
    const categorybar = document.getElementById("categorybar");

    if (categorybar) {

        categorybar.addEventListener("click", event => {

            const link = event.target.closest("[data-page]");

            if (!link || !categorybar.contains(link)) return;

            event.preventDefault();

            const pageName = link.dataset.page;

            if (!pages[pageName]) {
                console.warn(`Page "${pageName}" does not exist.`);
                return;
            }

            history.pushState(
                { page: pageName },
                "",
                `?page=${pageName}`
            );

            loadPage(pageName);

        });

    }


    // Browser back and forward
    window.addEventListener("popstate", () => {

        const pageName =
            new URLSearchParams(window.location.search).get("page") || "foryou";

        loadPage(pageName);

    });


    // Load initial page
    const initialPage =
        new URLSearchParams(window.location.search).get("page") || "foryou";

    await loadPage(initialPage);

}


// Start website
initWebsite();
