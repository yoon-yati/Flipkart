// =====================================
// SHARED CATEGORY BANNER
// =====================================

const categoryBannerData = {

    fashion: [
        { image: "f1.webp", name: "Shop Now" },
        { image: "f2.webp", name: "Tee, Shirts", filter: "tee-shirts" },
        { image: "f3.webp", name: "Jeans, Trousers", filter: "jeans-trousers" },
        { image: "f4.webp", name: "Casual Shoes", filter: "casual-shoes" },
        { image: "f5.webp", name: "Sports Shoes", filter: "sports-shoes" },
        { image: "f6.webp", name: "Watches", filter: "watches" },
        { image: "f7.webp", name: "Kurta Pajama", filter: "kurta-pajama" },
        { image: "f8.webp", name: "Jeans, Trousers", filter: "jeans-trousers" },
        { image: "f9.webp", name: "Clogs", filter: "clogs" },
        { image: "f10.webp", name: "Trunk,vest", filter: "trunk-vest" },
        { image: "f21.webp", name: "Wallet & Belts", filter: "wallet-belts" },
        { image: "f22.webp", name: "Shop Now" },
        { image: "f23.webp", name: "Style Hub" },
        { image: "f11.webp", name: "Shop Now" },
        { image: "f12.webp", name: "Kurta sets", filter: "kurta-sets" },
        { image: "f13.webp", name: "Dresses, Coords", filter: "dresses-coords" },
        { image: "f14.webp", name: "Torlley bags", filter: "torlley-bags" },
        { image: "f15.webp", name: "Dhanteras", filter: "dhanteras" },
        { image: "f16.webp", name: "Sarees", filter: "sarees" },
        { image: "f17.webp", name: "Kids Clothing ", filter: "kids-clothing" },
        { image: "f18.webp", name: "Jackets", filter: "jackets" },
        { image: "f19.webp", name: "Women Shoes", filter: "women-shoes" },
        { image: "f20.webp", name: "Backpacks", filter: "backpacks" },
        { image: "f24.webp", name: "Kurtis", filter: "kurtis" },
        { image: "f25.webp", name: "Korean Store" },
        { image: "f26.webp", name: "Trends" },

    ],

    mobile: [
        { image: "m11.webp", name: "iPhone", filter: "iphone" },
        { image: "m12.webp", name: "Motorola", filter: "motorola" },
        { image: "m13.webp", name: "realme", filter: "realme" },
        { image: "m14.webp", name: "POCO", filter: "poco" },
        { image: "m15.webp", name: "Google", filter: "google" },
        { image: "m16.webp", name: "HMD", filter: "hmd" },
        { image: "m17.webp", name: "boltt", filter: "boltt" },
        { image: "m18.webp", name: "MIVI", filter: "mivi" },
        { image: "m19.webp", name: "Tecno", filter: "tecno" },
        { image: "m20.webp", name: "Samsung", filter: "samsung" },
        { image: "m21.webp", name: "vivo", filter: "vivo" },
        { image: "m22.webp", name: "OPPO", filter: "oppo" },
        { image: "m23.webp", name: "Ai+", filter: "ai-plus" },
        { image: "m24.webp", name: "Nothing", filter: "nothing" },
        { image: "m25.webp", name: "Inflnix", filter: "inflnix" },
        { image: "m26.webp", name: "LAVA", filter: "lava" },
        { image: "m27.webp", name: "Redmi", filter: "redmi" },
        { image: "m28.webp", name: "Google One", filter: "google-one" },

    ],

    electronic: [
        { image: "be1.webp", name: "Gaming PCs", filter: "gaming-pcs" },
        { image: "be2.webp", name: "Tablets", filter: "tablets" },
        { image: "be3.webp", name: "Home Audio", filter: "home-audio" },
        { image: "be4.webp", name: "Wearables", filter: "wearables" },
        { image: "be5.webp", name: "ITPeripherals", filter: "ITPeripherals" },
        { image: "be6.webp", name: "Cameara", filter: "Camera" },
        { image: "be7.webp", name: "Phone Covers", filter: "Phone Covers" },
        { image: "be8.webp", name: "Storage", filter: "Storage" },
        { image: "be9.webp", name: "Healthcare", filter: "Healthcare" },
        { image: "be10.webp", name: "Networking", filter: "Networking" },
        { image: "be11.webp", name: "Software & Games", filter: "cameras" },
        { image: "be12.webp", name: "Laptops", filter: "laptops" },
        { image: "be13.webp", name: "Earphones", filter: "Earphones" },
        { image: "be14.webp", name: "2 wheelers", filter: "2 wheelers" },
        { image: "be15.webp", name: "Grooming", filter: "Grooming" },
        { image: "be16.webp", name: "Accessories", filter: "Accessories" },
        { image: "be17.webp", name: "Chargers", filter: "Chargers" },
        { image: "be18.webp", name: "Gaming", filter: "Gaming" },
        { image: "be19.webp", name: "Poewr banks", filter: "Power banks" },
        { image: "be20.webp", name: "Smart devices", filter: "Smart devices" },
        { image: "be21.webp", name: "Printers", filter: "Printers" },
    ],

    beauty: [
        { image: "bb1.webp", name: "Skincare", filter: "skincare" },
        { image: "bb2.webp", name: "Hair Care", filter: "hair-care" },
        { image: "bb3.webp", name: "Men's grooming", filter: "men-grooming" },
        { image: "bb4.webp", name: "Makeup", filter: "makeup" },
        { image: "bb5.webp", name: "Global Luxe", filter: "global-luxe" },
        { image: "bb6.webp", name: "Fragrances", filter: "fragrances" },
        { image: "bb7.webp", name: "Derma Store", filter: "derma store" },
        { image: "bb8.webp", name: "Bath & body", filter: "bath & body" },
        { image: "bb9.webp", name: "K-beauty", filter: "k-beauty" },
        { image: "bb10.webp", name: "Hygiene", filter: "hygiene" },
        { image: "bb11.webp", name: "Only here!", filter: "only here" },
        { image: "bb12.webp", name: "Oral care", filter: "oral-care" },
        { image: "bb13.webp", name: "Combos", filter: "combos" },
        { image: "bb14.webp", name: "Live Now", filter: "live now" },
        { image: "bb15.webp", name: "Envy", filter: "envy" },
    ],

    categoryhome: [
        { image: "bh1.webp", name: "Top-deals", filter: "top-deals" },
        { image: "bh2.webp", name: "Get in minutes", filter: "get-in-minutes" },
        { image: "bh3.webp", name: "Giifting", filter: "gifting" },
        { image: "bh4.webp", name: "Trending", filter: "trending" },
        { image: "bh5.webp", name: "Wall decor", filter: "wall-decor" },
        { image: "bh6.webp", name: "Gas Stove", filter: "gas-stove" },
        { image: "bh7.webp", name: "Lighting Essential", filter: "lighting-essential" },
        { image: "bh8.webp", name: "Blankets", filter: "blankets" },
        { image: "bh9.webp", name: "Gardening", filter: "gardening" },
        { image: "bh10.webp", name: "Step Ladder", filter: "step-ladder" },
        { image: "bh11.webp", name: "Pooja needs", filter: "pooja-needs" },
        { image: "bh12.webp", name: "Dinner sets", filter: "dinner-sets" },
        { image: "bh13.webp", name: "Curtains", filter: "curtains" },
        { image: "bh14.webp", name: "Glasses", filter: "glasses" },
        { image: "bh15.webp", name: "Power Drill", filter: "power-drill" },
        { image: "bh16.webp", name: "Dining sets", filter: "dining-sets" },
        { image: "bh17.webp", name: "Mattresses", filter: "mattresses" },
        { image: "bh18.webp", name: "Wall clock", filter: "wall-clock" },
        { image: "bh19.webp", name: "Wallpapers", filter: "wallpapers" },
        { image: "bh20.webp", name: "Floormat", filter: "floormat" },
        { image: "bh21.webp", name: "Faucet", filter: "faucet" },
        { image: "bh22.webp", name: "Apliance covers", filter: "appliance-covers" },
        { image: "bh23.webp", name: "Cleaning picks", filter: "cleaning-picks" },
        { image: "bh24.webp", name: "Containers", filter: "containers" },

    ],

    appliance: [
        { image: "ba1.webp", name: "Television", filter: "television" },
        { image: "ba2.webp", name: "Stabilizers", filter: "stabilizers" },
        { image: "ba3.webp", name: "Laundry", filter: "laundry" },
        { image: "ba4.webp", name: "Kitchen", filter: "kitchen" },
        { image: "ba5.webp", name: "ACs", filter: "acs" },
        { image: "ba6.webp", name: "Fridges", filter: "fridges" },
        { image: "ba7.webp", name: "Fans", filter: "fans" },
        { image: "ba8.webp", name: "Home", filter: "home" },
        { image: "ba9.webp", name: "Microwaves ", filter: "microwaves" },
        { image: "ba10.webp", name: "Breakfast", filter: "breakfast" },
        { image: "ba11.webp", name: "Value365", filter: "value365" },
        { image: "ba12.webp", name: "FK originals", filter: "fk-originals" },
        { image: "ba13.webp", name: "Appliances", filter: "appliances" },
        { image: "ba14.webp", name: "Power Backup", filter: "power-backup" },
        { image: "ba15.webp", name: "Geysers", filter: "geysers" },
        { image: "ba16.webp", name: "Dishwashers", filter: "dishwashers" },

    ],

    toy: [
        { image: "bt1.webp", name: "Top deals", filter: "top-deals" },
        { image: "bt2.webp", name: "Diapers", filter: "diapers" },
        { image: "bt3.webp", name: "Toys & Games", filter: "toys-games" },
        { image: "bt4.webp", name: "Wipes", filter: "wipes" },
        { image: "bt5.webp", name: "Stationery", filter: "stationery" },
        { image: "bt6.webp", name: "Skin Care", filter: "skin-care" },
        { image: "bt7.webp", name: "Gifts", filter: "gifts" },
        { image: "bt8.webp", name: "Travel", filter: "travel" },
        { image: "bt9.webp", name: "Arts & Crafts", filter: "arts-crafts" },
        { image: "bt10.webp", name: "Bedding", filter: "bedding" },
        { image: "bt11.webp", name: "Leo & More", filter: "leo-more" },
        { image: "bt12.webp", name: "Gifting", filter: "gifting" },
        { image: "bt13.webp", name: "STEM toys", filter: "stem-toys" },
        { image: "bt14.webp", name: "Feeding", filter: "feeding" },


    ],

    food: [
        { image: "bf1.webp", name: "Diwali Specials", filter: "diwali-specials" },
        { image: "bf2.webp", name: "Top Deals", filter: "top-deals" },
        { image: "bf3.webp", name: "Dry fruits & Nuts", filter: "dry-fruits-nuts" },
        { image: "bf4.webp", name: "Health Drinks", filter: "health-drinks" },
        { image: "bf5.webp", name: "Chocolates", filter: "chocolates" },
        { image: "bf6.webp", name: "Proteins", filter: "proteins" },
        { image: "bf7.webp", name: "Food Spreads", filter: "food-spreads" },
        { image: "bf8.webp", name: "Vitamins", filter: "vitamins" },
        { image: "bf9.webp", name: "Breakfast picks", filter: "breakfast-picks" },
        { image: "bf10.webp", name: "Ayurveda", filter: "ayurveda" },
        { image: "bf11.webp", name: "Cooking picks", filter: "cooking-picks" },
        { image: "bf12.webp", name: "Nutrition Bars", filter: "nutrition-bars" },
        { image: "bf13.webp", name: "Hot Brews", filter: "hot-brews" },
        { image: "bf14.webp", name: "Sexual Health", filter: "sexuality" },
        { image: "bf15.webp", name: "Sweets", filter: "sweets" },
        { image: "bf16.webp", name: "Medical Kits", filter: "medical-kits" },
        { image: "bf17.webp", name: "New Launches", filter: "new-launches" },
        { image: "bf18.webp", name: "Household", filter: "household" },
        { image: "bf19.webp", name: "New Launch", filter: "new-launch" },


    ],

    accessorie: [
        { image: "ba1.webp", name: "Top deals", filter: "top-deals" },
        { image: "ba2.webp", name: "Helmets", filter: "helmets" },
        { image: "ba3.webp", name: "Dashcams", filter: "dashcams" },
        { image: "ba4.webp", name: "Enginge Oils", filter: "engine-oils" },
        { image: "ba5.webp", name: "Cleaners", filter: "cleaners" },
        { image: "ba6.webp", name: "Vehicle Covers", filter: "vehicle-covers" },
        { image: "ba7.webp", name: "Vehicle lights", filter: "vehicle-lights" },
        { image: "ba8.webp", name: "Washers", filter: "washers" },
        { image: "ba9.webp", name: "Vehicle tyres", filter: "vehicle-tyres" },
        { image: "ba10.webp", name: "Tyre pumps", filter: "tyre-pumps" },
        { image: "ba11.webp", name: "Media Players", filter: "media-players" },
        { image: "ba12.webp", name: "Batteries", filter: "batteries" },
        { image: "ba13.webp", name: "Styling", filter: "styling" },


    ],

    sport: [
        { image: "bs1.webp", name: "Top deals", filter: "top-deals" },
        { image: "bs2.webp", name: "Treadmills", filter: "treadmills" },
        { image: "bs3.webp", name: "Cricket gear", filter: "cricket-gear" },
        { image: "bs4.webp", name: "Kid's faves", filter: "kids-faves" },
        { image: "bs5.webp", name: "Indoor Sports", filter: "indoor-sports" },
        { image: "bs6.webp", name: "Ball Sports", filter: "ball-sports" },
        { image: "bs7.webp", name: "Health gear", filter: "health-gear" },
        { image: "bs8.webp", name: "Proteins", filter: "proteins" },
        { image: "bs9.webp", name: "Home gym", filter: "home-gym" },
        { image: "bs10.webp", name: "Yoga", filter: "yoga" },
        { image: "bs11.webp", name: "Cycles", filter: "cycles" },
        { image: "bs12.webp", name: "Health gear", filter: "health gear" },
        { image: "bs13.webp", name: "Badminton", filter: "badminton" },
        { image: "bs14.webp", name: "Fitness bikes", filter: "fitness-bikes" },
        { image: "bs15.webp", name: "Camping & more", filter: "camping-more" },


    ],



    furniture: [
        { image: "bf1.webp", name: "Top20 deals", filter: "top-deals" },
        { image: "bf2.webp", name: "Value 365", filter: "value-365" },
        { image: "bf3.webp", name: "Mattresses", filter: "mattresses" },
        { image: "bf4.webp", name: "Office Chairs", filter: "office-chairs" },
        { image: "bf5.webp", name: "Beds", filter: "beds" },
        { image: "bf6.webp", name: "Wardrobes", filter: "wardrobes" },
        { image: "bf7.webp", name: "Sofas", filter: "sofas" },
        { image: "bf8.webp", name: "Office Tables", filter: "office-tables" },
        { image: "bf9.webp", name: "Recliners", filter: "recliners" },
        { image: "bf10.webp", name: "Sofa Beds", filter: "sofa-beds" },
        { image: "bf11.webp", name: "Dressing Tables", filter: "dressing-tables" },
        { image: "bf12.webp", name: "Dining sets", filter: "dining-sets" },
        { image: "bf13.webp", name: "TV units", filter: "tv-units" },
        { image: "bf14.webp", name: "Laptop Table", filter: "laptop-table" },
        { image: "bf15.webp", name: "Coffee Tables", filter: "coffee-tables" },
        { image: "bf16.webp", name: "Hammocks", filter: "hammocks" },
        { image: "bf17.webp", name: "Collapsible", filter: "collapsible" },
        { image: "bf18.webp", name: "Shoe racks", filter: "shoe-racks" },
        { image: "bf19.webp", name: "Bean Bags", filter: "bean-bags" },
        { image: "bf20.webp", name: "Home Temples", filter: "home-temples" },
        { image: "bf21.webp", name: "Kid's Furniture", filter: "kids-furniture" },
        { image: "bf22.webp", name: "View all", filter: "view-all" },

    ],

    book: [
        { image: "bb1.webp", name: "Top Deals", filter: "top-deals" },
        { image: "bb2.webp", name: "Boxsets", filter: "boxsets" },
        { image: "bb3.webp", name: "Trading books", filter: "trading" },
        { image: "bb4.webp", name: "Young Adults", filter: "young-adults" },
        { image: "bb5.webp", name: "Exam prep", filter: "exam-prep" },
        { image: "bb6.webp", name: "Trending", filter: "trending" },
        { image: "bb7.webp", name: "School Book", filter: "school-book" },
        { image: "bb8.webp", name: "Children", filter: "children" },
        { image: "bb9.webp", name: "College", filter: "college" },
        { image: "bb10.webp", name: "Non-fiction", filter: "non-fiction" },
        { image: "bb11.webp", name: "Best Sellers", filter: "best-sellers" },
        { image: "bb12.webp", name: "Fiction", filter: "fiction" },
        { image: "bb13.webp", name: "Languages", filter: "languages" },


    ],


    wheel: [
        { image: "bw1.webp", name: "Hero", filter: "hero" },
        { image: "bw2.webp", name: "TVS", filter: "tvs" },
        { image: "bw3.webp", name: "BAJAJ", filter: "bajaj" },
        { image: "bw4.webp", name: "Ampere", filter: "ampere" },
        { image: "bw5.webp", name: "Chetak", filter: "chetak" },
        { image: "bw6.webp", name: "VIDA", filter: "vida" },
        { image: "bw7.webp", name: "TVS iQube", filter: "tvs-iqube" },
        { image: "bw8.webp", name: "BGauss", filter: "bgauss" },
        { image: "bw9.webp", name: "Ather", filter: "ather" },
        { image: "bw10.webp", name: "Flying Flea", filter: "flying-flea" },
        { image: "bw11.webp", name: "Royal Enfield", filter: "royal-enfield" },
        { image: "bw12.webp", name: "Harley Davidson", filter: "harley-davidson" },
        { image: "bw13.webp", name: "River", filter: "river" },
        { image: "bw14.webp", name: "Suzuki", filter: "suzuki" },
        { image: "bw15.webp", name: "Amo", filter: "amo" },
        { image: "bw16.webp", name: "Revolt", filter: "revolt" },
        { image: "bw17.webp", name: "Lectrix", filter: "lectrix" },
        { image: "bw18.webp", name: "Triumph", filter: "triumph" },
        { image: "bw19.webp", name: "Jawa Yezdi", filter: "jawa-yezdi" },
        { image: "bw20.webp", name: "KTM", filter: "ktm" },
        { image: "bw21.webp", name: "Green", filter: "green" },
        { image: "bw22.webp", name: "Deltic", filter: "deltic" },

    ],


};

for (const items of Object.values(categoryBannerData)) {
    items.forEach((item) => {
        const name = item.name.trim().toLowerCase();
        item.filter = name === "shop now"
            ? "all"
            : name.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    });
}


// =====================================
// RENDER CATEGORY BANNER
// =====================================

async function loadCategoryBanner(categoryName) {

    const container = document.getElementById("categoryBanner");

    if (!container) {
        console.error("Category banner container not found!");
        return;
    }

    const categories = categoryBannerData[categoryName] || [];

    container.innerHTML = `
        <div class="w-full overflow-x-auto scrollbar-hide">

            <div class="grid grid-rows-2 grid-flow-col 
                        auto-cols-27.5 
                        gap-x-3 gap-y-4 
                        w-max">

                ${categories.map(item => {
        const params = new URLSearchParams({
            category: categoryName,
            filter: item.filter
        });

        return `
                        <a
                            href="product-list-page.html?${params.toString()}"
                            data-category="${categoryName}"
                            data-filter="${item.filter}"
                            class="flex flex-col items-center text-center"
                        >
                            <img
                                src="assets/category/${categoryName}/${item.image}"
                                alt="${item.name}"
                                class="w-20 h-20 object-contain"
                            >
                            <p class="text-sm font-medium mt-2">${item.name}</p>
                        </a>
                    `;
    }).join("")}

            </div>

        </div>
    `;
}