async function loadProductListFragment(targetId, filePath) {
    const target = document.getElementById(targetId);

    if (!target) {
        throw new Error(`Product list page element #${targetId} was not found.`);
    }

    const response = await fetch(filePath);

    if (!response.ok) {
        throw new Error(`Could not load ${filePath}: ${response.status}`);
    }

    target.innerHTML = await response.text();
}

async function initStandaloneProductListPage() {
    try {
        await Promise.all([
            loadProductListFragment("product-list-navbar", "layouts/product-list-navbar.html"),
            loadProductListFragment("product-list-content", "components/product-list.html")
        ]);

        const params = new URLSearchParams(window.location.search);
        const categoryName = params.get("category") || "fashion";
        const filterName = params.get("filter") || "all";
        const categoryPath = JSON.parse(params.get("path") || "[]");

        if (typeof window.initProductListPage !== "function") {
            throw new Error("The product list initializer is not available.");
        }

        await window.initProductListPage(categoryName, filterName, categoryPath);
    } catch (error) {
        console.error("Could not initialize the standalone product list page:", error);

        const content = document.getElementById("product-list-content");
        if (content) {
            content.innerHTML = `
                <p role="alert" class="mx-auto mt-8 max-w-3xl bg-white p-5 text-sm text-red-700">
                    This page could not be loaded. Please refresh and try again.
                </p>
            `;
        }
    }
}

initStandaloneProductListPage();
