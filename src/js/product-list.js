const productFilterOptions = {
    fashion: {
        common: [
            { name: "Gender", options: ["Men", "Women", "Boys", "Girls"] },
            { name: "Brand", options: ["Roadster", "Puma", "Nike", "Adidas"] },
            { name: "Color", options: ["Black", "Blue", "White", "Green"] },
            { name: "Price", type: "price" },
            { name: "Customer Ratings", options: ["4★ & above", "3★ & above"] }
        ],
        bottomwear: [
            { name: "Fit", options: ["Regular", "Slim", "Loose", "Relaxed"] },
            { name: "Fabric", options: ["Cotton", "Denim", "Polyester", "Linen"] },
            { name: "Size", options: ["28", "30", "32", "34", "36", "38", "40", "42"] },
            { name: "Type", options: ["Jeans", "Trousers", "Joggers"] },
            { name: "Occasion", options: ["Casual", "Formal", "Sports"] }
        ],
        footwear: [
            { name: "Type of Shoes", options: ["Running Shoes", "Casual Shoes", "Sports Shoes", "Walking Shoes"] },
            { name: "Occasion", options: ["Sports", "Casual", "Formal"] },
            { name: "Outer Material", options: ["Mesh", "Synthetic", "Leather", "Canvas"] },
            { name: "Size", options: ["6", "7", "8", "9", "10", "11"] }
        ],
        topwear: [
            { name: "Fabric", options: ["Cotton", "Polyester", "Linen", "Denim"] },
            { name: "Type", options: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Kurtas"] },
            { name: "Size", options: ["S", "M", "L", "XL", "XXL"] },
            { name: "Pattern", options: ["Solid", "Printed", "Striped", "Checked"] },
            { name: "Fit", options: ["Regular", "Slim", "Oversized"] },
            { name: "Occasion", options: ["Casual", "Formal", "Party"] },
            { name: "Collar", options: ["Round Neck", "Polo", "Spread", "Mandarin"] }
        ]
    },
    mobile: [
        { name: "Brand", options: ["Samsung", "Apple", "Motorola", "Xiaomi", "realme", "POCO", "OnePlus", "AI+"] },
        { name: "Price", type: "price" },
        { name: "RAM", options: ["4 GB", "6 GB", "8 GB", "12 GB"] },
        { name: "Internal Storage", options: ["64 GB", "128 GB", "256 GB", "512 GB"] },
        { name: "Screen Size", options: ["Below 5.5 inch", "5.5 - 6.0 inch", "Above 6.0 inch"] },
        { name: "Primary Camera", options: ["Below 12 MP", "12 - 48 MP", "Above 48 MP"] },
        { name: "Battery Capacity", options: ["Below 4000 mAh", "4000 - 5000 mAh", "Above 5000 mAh"] },
        { name: "Operating System", options: ["Android", "iOS"] },
        { name: "Customer Ratings", options: ["4★ & above", "3★ & above"] }
    ],
    book: [
        { name: "Author", options: ["Oxford", "William Shakespeare", "Agatha Christie"] },
        { name: "Price", type: "price" },
        { name: "Language", options: ["English", "Myanmar", "Hindi"] },
        { name: "Binding", options: ["Paperback", "Hardcover", "Board Book"] },
        { name: "Genre", options: ["Educational", "Fiction", "Children"] },
        { name: "Customer Ratings", options: ["4★ & above", "3★ & above"] }
    ],
    electronic: [
        { name: "Brand", options: ["HP", "Dell", "Lenovo", "Sony", "Canon"] },
        { name: "Price", type: "price" },
        { name: "Type", options: ["Laptop", "Tablet", "Headphones", "Camera"] },
        { name: "Connectivity", options: ["Bluetooth", "Wi-Fi", "USB"] },
        { name: "Features", options: ["Wireless", "Noise Cancelling", "Touchscreen"] },
        { name: "Customer Ratings", options: ["4★ & above", "3★ & above"] }
    ],
    beauty: [
        { name: "Brand", options: ["Lakme", "Maybelline", "Nivea", "Mamaearth"] },
        { name: "Price", type: "price" },
        { name: "Ideal For", options: ["Men", "Women", "Unisex"] },
        { name: "Skin Type", options: ["All Skin Types", "Oily", "Dry", "Combination"] },
        { name: "Form", options: ["Cream", "Liquid", "Powder", "Serum"] },
        { name: "Customer Ratings", options: ["4★ & above", "3★ & above"] }
    ],
    appliance: [
        { name: "Brand", options: ["Samsung", "LG", "Whirlpool", "Voltas"] },
        { name: "Price", type: "price" },
        { name: "Capacity", options: ["Below 200 L", "200 - 400 L", "Above 400 L"] },
        { name: "Energy Rating", options: ["3 Star", "4 Star", "5 Star"] },
        { name: "Type", options: ["Refrigerator", "Washing Machine", "Air Conditioner"] }
    ],
    furniture: [
        { name: "Brand", options: ["Wakefit", "HomeTown", "Nilkamal"] },
        { name: "Price", type: "price" },
        { name: "Room Type", options: ["Living Room", "Bedroom", "Kitchen"] },
        { name: "Material", options: ["Wood", "Engineered Wood", "Metal"] },
        { name: "Color", options: ["Brown", "Black", "White", "Grey"] }
    ],
    categoryhome: [
        { name: "Brand", options: ["Wakefit", "HomeTown", "Nilkamal"] },
        { name: "Price", type: "price" },
        { name: "Room Type", options: ["Living Room", "Bedroom", "Kitchen"] },
        { name: "Material", options: ["Wood", "Engineered Wood", "Metal"] },
        { name: "Color", options: ["Brown", "Black", "White", "Grey"] }
    ],
    toy: [
        { name: "Brand", options: ["LEGO", "Hot Wheels", "Funskool"] },
        { name: "Price", type: "price" },
        { name: "Age Group", options: ["0 - 2 Years", "3 - 5 Years", "6 - 8 Years", "9+ Years"] },
        { name: "Toy Type", options: ["Educational", "Soft Toys", "Outdoor Games"] },
        { name: "Material", options: ["Plastic", "Wood", "Fabric"] }
    ],
    food: [
        { name: "Brand", options: ["Tata", "Aashirvaad", "Fortune"] },
        { name: "Price", type: "price" },
        { name: "Food Type", options: ["Vegetarian", "Non Vegetarian", "Vegan"] },
        { name: "Pack Size", options: ["Below 500 g", "500 g - 1 kg", "Above 1 kg"] }
    ],
    accessorie: [
        { name: "Brand", options: ["Fastrack", "Titan", "Wildcraft"] },
        { name: "Price", type: "price" },
        { name: "Color", options: ["Black", "Blue", "Brown", "Silver"] },
        { name: "Material", options: ["Leather", "Metal", "Fabric"] },
        { name: "Occasion", options: ["Casual", "Formal", "Sports"] }
    ],
    sport: [
        { name: "Brand", options: ["Nike", "Adidas", "Puma", "Nivia"] },
        { name: "Price", type: "price" },
        { name: "Sport Type", options: ["Running", "Cricket", "Football", "Fitness"] },
        { name: "Material", options: ["Cotton", "Polyester", "Rubber"] },
        { name: "Size", options: ["S", "M", "L", "XL"] }
    ],
    wheel: [
        { name: "Brand", options: ["Hero", "Honda", "TVS", "Bajaj"] },
        { name: "Price", type: "price" },
        { name: "Vehicle Type", options: ["Motorcycle", "Scooter", "Electric"] },
        { name: "Fuel Type", options: ["Petrol", "Electric"] }
    ]
};

const productCategoryPaths = {
    fashion: {
        "jeans-trousers": ["Clothing and Accessories", "Bottomwear"],
        "trunk-vest": ["Clothing and Accessories", "Bottomwear"],
        "sports-shoes": ["Footwear", "Men's Footwear"],
        "casual-shoes": ["Footwear", "Men's Footwear"],
        "women-shoes": ["Footwear", "Women's Footwear"],
        "tee-shirts": ["Clothing and Accessories", "Topwear"],
        "shirts": ["Clothing and Accessories", "Topwear"],
        "kurta-pajama": ["Clothing and Accessories", "Topwear"],
        "kurta-sets": ["Clothing and Accessories", "Topwear"],
        "dresses-coords": ["Clothing and Accessories", "Western Wear"],
        "sarees": ["Clothing and Accessories", "Ethnic Wear"],
        "kurtis": ["Clothing and Accessories", "Ethnic Wear"]
    },
    mobile: { default: ["Mobiles and Accessories", "Mobiles"] },
    book: { default: ["Books and Media", "Books"] },
    electronic: { default: ["Electronics", "Gadgets"] },
    beauty: { default: ["Beauty and Personal Care", "Beauty"] },
    appliance: { default: ["TVs and Appliances", "Home Appliances"] },
    furniture: { default: ["Home and Furniture", "Furniture"] },
    categoryhome: { default: ["Home and Furniture", "Home"] },
    toy: { default: ["Baby and Kids", "Toys"] },
    food: { default: ["Food and Health", "Food"] },
    accessorie: { default: ["Fashion Accessories", "Accessories"] },
    sport: { default: ["Sports and Fitness", "Sports"] },
    wheel: { default: ["Vehicles", "Two Wheelers"] }
};

function getProductCategoryPath(categoryName, filterName, selectedItem) {
    const product = (window.productData || []).find(item =>
        item.category === categoryName && item.filter === filterName
    );
    if (product?.categoryPath) return product.categoryPath;

    const categoryPaths = productCategoryPaths[categoryName] || {};
    const configuredPath = categoryPaths[filterName] || categoryPaths.default;

    return configuredPath || [categoryName, selectedItem?.name || "All"];
}

function categoryListUrl(categoryName, filterName, path = []) {
    const params = new URLSearchParams({ category: categoryName, filter: filterName });
    if (path.length) params.set("path", JSON.stringify(path));
    return `product-list-page.html?${params.toString()}`;
}

function isCategoryPathPrefix(prefix, path) {
    return prefix.length <= path.length && prefix.every((label, index) => label === path[index]);
}

function validCatalogCategoryPath(categoryName, requestedPath) {
    if (!Array.isArray(requestedPath) || !requestedPath.every(label => typeof label === "string")) return [];

    const catalogPaths = (window.productData || [])
        .filter(product => product.category === categoryName && Array.isArray(product.categoryPath))
        .map(product => product.categoryPath);
    const legacyPaths = (categoryBannerData[categoryName] || [])
        .filter(item => item.filter)
        .map(item => getProductCategoryPath(categoryName, item.filter, item));
    const paths = [...catalogPaths, ...legacyPaths];

    return requestedPath.length && paths.some(path => isCategoryPathPrefix(requestedPath, path))
        ? requestedPath
        : [];
}

function getProductFacetGroups(categoryName, filterName) {
    if (categoryName === "fashion") {
        const path = getProductCategoryPath(categoryName, filterName);
        const categorySpecific = path.includes("Bottomwear")
            ? productFilterOptions.fashion.bottomwear
            : path.some(label => label.includes("Footwear"))
                ? productFilterOptions.fashion.footwear
                : path.includes("Topwear")
                    ? productFilterOptions.fashion.topwear
                    : [];

        return [...productFilterOptions.fashion.common.slice(0, 3), ...categorySpecific,
        ...productFilterOptions.fashion.common.slice(3)];
    }

    return productFilterOptions[categoryName] || productFilterOptions.electronic;
}

function renderProductCategories(categoryName, filterName, selectedItem, requestedPath) {
    const container = document.getElementById("categoryFilters");
    const catalogProducts = (window.productData || []).filter(product =>
        product.category === categoryName && product.categoryPath?.length
    );

    if (catalogProducts.length) {
        const catalogFilters = new Set(catalogProducts.map(product => product.filter));
        const legacyCategories = (categoryBannerData[categoryName] || [])
            .filter(item => item.filter && item.filter !== "all" && !catalogFilters.has(item.filter))
            .map(item => ({
                filter: item.filter,
                categoryPath: getProductCategoryPath(categoryName, item.filter, item)
            }));
        renderCatalogCategories(
            container,
            categoryName,
            filterName,
            [...catalogProducts, ...legacyCategories],
            requestedPath
        );
        return;
    }

    const items = categoryBannerData[categoryName] || [];
    const path = getProductCategoryPath(categoryName, filterName, selectedItem);
    const pathHtml = path.map((label, index) => `
        <div class="flex items-center gap-1 py-1 ${index === path.length - 1 ? "font-semibold text-gray-800" : "text-gray-500"}">
            ${index < path.length - 1 ? '<span aria-hidden="true">›</span>' : ""}
            <span>${label}</span>
        </div>
    `).join("");

    const relatedItems = categoryName === "fashion" && path.includes("Bottomwear")
        ? items.filter(item => ["jeans-trousers", "trunk-vest"].includes(item.filter))
        : categoryName === "fashion" && path.some(label => label.includes("Footwear"))
            ? items.filter(item => ["sports-shoes", "casual-shoes", "clogs", "women-shoes"].includes(item.filter))
            : categoryName === "fashion" && path.includes("Topwear")
                ? items.filter(item => ["tee-shirts", "kurta-pajama", "kurta-sets"].includes(item.filter))
                : items;
    const uniqueRelatedItems = [...new Map(relatedItems.map(item => [item.filter, item])).values()];

    const linksHtml = uniqueRelatedItems.map(item => {
        const params = new URLSearchParams({ category: categoryName, filter: item.filter });
        const activeClass = item.filter === filterName ? "font-semibold text-gray-900" : "text-gray-600 hover:text-blue-600";

        return `<a href="product-list-page.html?${params.toString()}" class="block py-1 pl-3 ${activeClass}">${item.name}</a>`;
    }).join("");

    container.innerHTML = `${pathHtml}<div class="mt-1 border-l border-gray-200 pl-2">${linksHtml}</div>`;
}

function renderCatalogCategories(container, categoryName, filterName, products, requestedPath = []) {
    const linkFor = (product, depth = 0) => {
        const isActive = product.filter === filterName;

        return `<a href="${categoryListUrl(categoryName, product.filter)}" ${isActive ? 'aria-current="page"' : ""}
            class="block py-1 text-gray-600 hover:text-blue-600 ${isActive ? "font-semibold text-gray-900" : ""}"
            style="padding-left:${depth * 12}px">
            ${product.categoryPath.at(-1)}
        </a>`;
    };

    const selectedProduct = products.find(product => product.filter === filterName);
    const currentPath = selectedProduct
        ? selectedProduct.categoryPath.slice(0, -1)
        : validCatalogCategoryPath(categoryName, requestedPath);
    const visibleProducts = currentPath.length
        ? products.filter(product => isCategoryPathPrefix(currentPath, product.categoryPath))
        : products;

    const branchMap = new Map();
    visibleProducts.forEach(product => {
        const label = product.categoryPath[currentPath.length];
        if (!label) return;
        if (!branchMap.has(label)) branchMap.set(label, []);
        branchMap.get(label).push(product);
    });

    const ancestorLinks = currentPath.slice(0, -1).map((label, index) => `
        <a href="${categoryListUrl(categoryName, "all", currentPath.slice(0, index + 1))}"
            class="block py-1 text-gray-500 hover:text-blue-600">
            <span aria-hidden="true">‹</span> ${label}
        </a>
    `).join("");
    const currentLabel = currentPath.at(-1);
    const branchHeading = currentLabel ? `
        <div class="py-1 font-semibold text-gray-800">
            <span aria-hidden="true">⌄</span> ${currentLabel}
        </div>
    ` : "";

    const childLinks = [...branchMap].map(([label, branchProducts]) => {
        const isLeaf = branchProducts.every(product => product.categoryPath.length === currentPath.length + 1);
        if (isLeaf) {
            const uniqueProducts = [...new Map(branchProducts.map(product => [product.filter, product])).values()];
            return uniqueProducts.map(product => linkFor(product, currentPath.length)).join("");
        }

        const childPath = [...currentPath, label];
        return `<a href="${categoryListUrl(categoryName, "all", childPath)}"
            class="block py-1 text-gray-700 hover:text-blue-600"
            style="padding-left:${currentPath.length * 12}px">
            <span aria-hidden="true">›</span> ${label}
        </a>`;
    }).join("");

    container.innerHTML = `${ancestorLinks}${branchHeading}${childLinks}`;
}

function renderProductFacetGroups(groups) {
    const container = document.getElementById("filterGroups");

    container.innerHTML = groups.map((group, index) => {
        if (group.type === "price") {
            return `
                <details open class="border-b border-gray-100 px-4 py-3">
                    <summary class="cursor-pointer list-none text-[11px] font-bold uppercase tracking-wide">
                        <span class="flex items-center justify-between">${group.name}<span class="text-gray-400">⌄</span></span>
                    </summary>
                    <div class="mt-4">
                        <input data-filter-input data-filter-name="${group.name}" aria-label="Maximum price"
                            type="range" min="0" max="50000" value="50000"
                            class="h-1 w-full cursor-pointer accent-blue-600">
                        <div class="mt-2 flex items-center justify-between text-[11px] text-gray-500">
                            <span>₹0</span><span data-price-value>₹50,000+</span>
                        </div>
                    </div>
                </details>
            `;
        }

        return `
            <details ${index < 2 ? "open" : ""} class="border-b border-gray-100 px-4 py-3">
                <summary class="cursor-pointer list-none text-[11px] font-bold uppercase tracking-wide">
                    <span class="flex items-center justify-between">${group.name}<span class="text-gray-400">⌄</span></span>
                </summary>
                <div class="mt-3 max-h-48 space-y-2 overflow-y-auto text-xs text-gray-700">
                    ${group.options.map(option => `
                        <label class="flex items-center gap-2">
                            <input data-filter-input data-filter-name="${group.name}" type="checkbox" value="${option}"
                                class="accent-blue-600">
                            <span>${option}</span>
                        </label>
                    `).join("")}
                </div>
            </details>
        `;
    }).join("");
}

function updateActiveProductFilters() {
    const activeFilters = document.getElementById("activeFilters");
    const checkedInputs = [...document.querySelectorAll("#filterGroups input[data-filter-input]:checked")];
    const priceInput = document.querySelector('#filterGroups input[type="range"][data-filter-input]');
    const chips = checkedInputs.map(input => `
        <button type="button" data-remove-filter="${input.dataset.filterName}" data-filter-value="${input.value}"
            class="rounded-sm bg-gray-100 px-2 py-1 text-[11px] text-gray-700 hover:bg-gray-200">
            ${input.value} <span aria-hidden="true">×</span>
        </button>
    `);

    if (priceInput && Number(priceInput.value) < Number(priceInput.max)) {
        chips.push(`<span class="rounded-sm bg-gray-100 px-2 py-1 text-[11px] text-gray-700">Up to ₹${Number(priceInput.value).toLocaleString("en-IN")}</span>`);
    }

    activeFilters.innerHTML = chips.join("");
    activeFilters.classList.toggle("hidden", chips.length === 0);
}

function getSampleProductTitles(categoryName, filterName, filterLabel) {
    if (categoryName === "mobile") {
        if (filterName === "all") {
            return [
                "OnePlus Nord 5G Smartphone",
                "POCO X8 Pro 5G",
                "Samsung Galaxy S24 FE 5G",
                "AI+ Nova 2 Power 5G"
            ];
        }

        return [
            `${filterLabel} 5G Smartphone`,
            `${filterLabel} Pro 5G`,
            `${filterLabel} Galaxy Smartphone`,
            `${filterLabel} Nova 5G`
        ];
    }

    if (categoryName === "fashion") {
        const label = filterLabel === "All" ? "Everyday Style" : filterLabel;
        return [
            `Men's ${label} Regular Fit`,
            `Classic ${label} for Men`,
            `Trendy ${label} Casual Wear`,
            `Premium ${label} Collection`
        ];
    }

    if (categoryName === "book") {
        return ["English Grammar & Composition", "The Complete Study Guide", "A Reader's Classic", "Learning Made Easy"];
    }

    return [
        `${filterLabel === "All" ? categoryLabelFor(categoryName) : filterLabel} Best Seller`,
        `Popular ${filterLabel === "All" ? categoryLabelFor(categoryName) : filterLabel}`,
        `Everyday ${filterLabel === "All" ? categoryLabelFor(categoryName) : filterLabel}`,
        `Premium ${filterLabel === "All" ? categoryLabelFor(categoryName) : filterLabel}`
    ];
}

function categoryLabelFor(categoryName) {
    return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
}

function getSampleProducts(categoryName, filterName, filterLabel, facetGroups) {
    const catalogProducts = (window.productData || []).filter(product =>
        product.category === categoryName
        && (filterName === "all" || product.filter === filterName)
    );
    if (catalogProducts.length) return catalogProducts;

    const mobileImages = filterName === "all"
        ? ["assets/products/p1.jpeg", "assets/products/p2.jpeg", "assets/products/p4.jpeg", "assets/products/p5.jpeg"]
        : filterName === "samsung"
            ? ["assets/products/p4.jpeg", "assets/products/p6.jpeg"]
            : filterName === "poco"
                ? ["assets/products/p2.jpeg"]
                : filterName === "realme"
                    ? ["assets/products/p3.jpeg"]
                    : [];
    const fashionImages = filterName === "sports-shoes" || filterName === "casual-shoes"
        ? ["assets/products/p16.jpeg", "assets/products/p15.jpeg"]
        : filterName === "watches"
            ? ["assets/products/p7.jpeg", "assets/products/p8.jpeg"]
            : [];
    const titles = getSampleProductTitles(categoryName, filterName, filterLabel);
    const brands = categoryName === "mobile" && filterName === "all"
        ? ["OnePlus", "POCO", "Samsung", "AI+"]
        : categoryName === "mobile" && filterName !== "all"
            ? [filterLabel]
            : facetGroups.find(group => group.name === "Brand")?.options || ["Flipkart SmartBuy"];

    return titles.map((title, index) => {
        const filters = {};
        const brand = brands[index % brands.length];

        facetGroups.forEach(group => {
            if (group.options?.length) {
                filters[group.name] = group.options[index % group.options.length];
            }
        });

        const image = categoryName === "mobile"
            ? mobileImages.length ? mobileImages[index % mobileImages.length] : undefined
            : fashionImages.length ? fashionImages[index % fashionImages.length] : undefined;
        filters.Brand = brand;

        return {
            id: `${categoryName}-${filterName}-${index}`,
            title,
            brand: brands[index % brands.length],
            price: [899, 1299, 1799, 2499][index],
            originalPrice: [1799, 2499, 3299, 4999][index],
            rating: [4.3, 4.1, 4.5, 4.2][index],
            image,
            filters
        };
    });
}

function renderProductCards(products) {
    const grid = document.getElementById("productGrid");
    const emptyState = document.getElementById("emptyState");

    grid.innerHTML = products.map(product => `
        <article class="group min-w-0 border-r border-b border-gray-100 p-3 transition-shadow hover:shadow-md sm:p-4">
            <div class="relative mb-3 flex h-48 items-center justify-center overflow-hidden bg-[#f7f8fa] sm:h-60">
                ${product.image
            ? `<img data-product-image src="${product.image}" alt="${product.title}" loading="lazy" class="h-full w-full object-contain p-2">`
            : ""}
                <span data-image-fallback class="${product.image ? "hidden" : ""} px-3 text-center text-xs text-gray-400">
                    ${product.image ? `Add image file: ${product.image}` : "Add product image in product data"}
                </span>
                <button type="button" aria-label="Add ${product.title} to wishlist"
                    class="absolute right-2 top-2 text-2xl leading-none text-gray-300 hover:text-red-500">♥</button>
                <span class="absolute bottom-2 left-2 rounded-sm bg-white px-2 py-1 text-[10px] font-semibold">
                    ${product.rating} <span class="text-green-600">★</span>
                </span>
            </div>
            <p class="mb-1 text-[10px] text-gray-400">Sponsored</p>
            <p class="truncate text-[11px] font-semibold text-gray-700">${product.brand}</p>
            <p class="mt-1 line-clamp-2 min-h-8 text-xs text-gray-800">${product.title}</p>
            <div class="mt-2 flex flex-wrap items-center gap-2 text-xs">
                <span class="font-bold">₹${product.price.toLocaleString("en-IN")}</span>
                <span class="text-[11px] text-gray-400 line-through">₹${product.originalPrice.toLocaleString("en-IN")}</span>
                <span class="text-[11px] font-semibold text-green-700">
                    ${Math.round((1 - product.price / product.originalPrice) * 100)}% off
                </span>
            </div>
            <p class="mt-2 text-[10px] font-semibold text-blue-700">Sample product</p>
        </article>
    `).join("");

    grid.querySelectorAll("[data-product-image]").forEach(image => {
        image.addEventListener("error", () => {
            image.classList.add("hidden");
            image.nextElementSibling.classList.remove("hidden");
        }, { once: true });
    });

    emptyState.classList.toggle("hidden", products.length > 0);
}

async function initProductListPage(requestedCategoryName, requestedFilterName = "all", requestedCategoryPath = []) {
    const categoryName = Object.hasOwn(categoryBannerData, requestedCategoryName)
        ? requestedCategoryName
        : "fashion";
    const categoryItems = categoryBannerData[categoryName] || [];
    const catalogProduct = (window.productData || []).find(product =>
        product.category === categoryName && product.filter === requestedFilterName
    );
    const selectedItem = categoryItems.find(item => item.filter === requestedFilterName)
        || (catalogProduct && { filter: catalogProduct.filter, name: catalogProduct.categoryPath.at(-1) });
    const filterName = selectedItem ? requestedFilterName : "all";
    const categoryPath = validCatalogCategoryPath(categoryName, requestedCategoryPath);
    const categoryLabel = categoryLabelFor(categoryName);
    const filterLabel = filterName === "all"
        ? categoryPath.at(-1) || "All"
        : selectedItem?.name || "All";

    document.title = `${filterLabel} ${categoryLabel} | Flipkart`;

    const breadcrumbCategory = document.getElementById("breadcrumbCategory");
    breadcrumbCategory.textContent = categoryLabel;
    breadcrumbCategory.href = `index.html?page=${encodeURIComponent(categoryName)}`;
    document.getElementById("breadcrumbFilter").textContent = filterLabel;

    document.getElementById("productHeading").textContent = filterLabel === "All"
        ? `${categoryLabel} Products`
        : `${filterLabel} ${categoryLabel} Products`;

    renderProductCategories(categoryName, filterName, selectedItem, categoryPath);
    const facetGroups = getProductFacetGroups(categoryName, filterName);
    renderProductFacetGroups(facetGroups);
    updateActiveProductFilters();

    const filterGroups = document.getElementById("filterGroups");
    const sampleProducts = getSampleProducts(categoryName, filterName, filterLabel, facetGroups)
        .filter(product => !categoryPath.length
            || isCategoryPathPrefix(categoryPath, product.categoryPath || []));
    const sortButtons = document.querySelectorAll("[data-sort]");

    function renderFilteredProducts() {
        const selectedFilters = [...filterGroups.querySelectorAll("input[type=checkbox]:checked")]
            .reduce((filters, input) => {
                const name = input.dataset.filterName;
                filters[name] ||= [];
                filters[name].push(input.value);
                return filters;
            }, {});
        const maximumPrice = Number(filterGroups.querySelector('input[type="range"]')?.value || Infinity);
        const searchTerm = document.getElementById("siteSearch")?.value.trim().toLowerCase() || "";

        let visibleProducts = sampleProducts.filter(product => {
            if (product.price > maximumPrice) return false;
            if (searchTerm && !`${product.title} ${product.brand}`.toLowerCase().includes(searchTerm)) return false;

            return Object.entries(selectedFilters).every(([name, values]) =>
                values.includes(product.filters[name])
            );
        });

        const activeSort = document.querySelector("[data-sort].text-blue-600")?.dataset.sort || "popular";
        if (activeSort === "low") visibleProducts.sort((a, b) => a.price - b.price);
        if (activeSort === "high") visibleProducts.sort((a, b) => b.price - a.price);
        if (activeSort === "popular") visibleProducts.sort((a, b) => b.rating - a.rating);
        if (activeSort === "new") visibleProducts.reverse();

        document.getElementById("resultCount").textContent =
            `Showing ${visibleProducts.length} of ${sampleProducts.length} sample products`;
        renderProductCards(visibleProducts);
    }

    renderFilteredProducts();

    filterGroups.addEventListener("change", event => {
        const input = event.target.closest("[data-filter-input]");
        if (!input) return;

        if (input.type === "range") {
            const value = input.parentElement.querySelector("[data-price-value]");
            value.textContent = input.value === input.max
                ? "₹50,000+"
                : `₹${Number(input.value).toLocaleString("en-IN")}`;
        }

        updateActiveProductFilters();
        renderFilteredProducts();
    });

    document.getElementById("activeFilters").addEventListener("click", event => {
        const removeButton = event.target.closest("[data-remove-filter]");
        if (!removeButton) return;

        const input = [...filterGroups.querySelectorAll("[data-filter-input]")].find(candidate =>
            candidate.dataset.filterName === removeButton.dataset.removeFilter
            && candidate.value === removeButton.dataset.filterValue
        );
        if (input) {
            input.checked = false;
            updateActiveProductFilters();
            renderFilteredProducts();
        }
    });

    document.getElementById("clearFilters").addEventListener("click", () => {
        filterGroups.querySelectorAll("[data-filter-input]").forEach(input => {
            if (input.type === "checkbox") input.checked = false;
            if (input.type === "range") {
                input.value = input.max;
                input.dispatchEvent(new Event("change", { bubbles: true }));
            }
        });
        updateActiveProductFilters();
        renderFilteredProducts();
    });

    sortButtons.forEach(button => button.addEventListener("click", () => {
        sortButtons.forEach(sortButton => {
            sortButton.classList.remove("border-b-2", "border-blue-600", "font-semibold", "text-blue-600");
        });
        button.classList.add("border-b-2", "border-blue-600", "font-semibold", "text-blue-600");
        renderFilteredProducts();
    }));

    document.querySelector("#siteSearch")?.addEventListener("input", renderFilteredProducts);
    document.querySelector("#siteSearch")?.form.addEventListener("submit", event => event.preventDefault());
}

window.initProductListPage = initProductListPage;
