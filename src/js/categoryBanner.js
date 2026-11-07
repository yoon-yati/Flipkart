// =====================================
// SHARED CATEGORY BANNER
// =====================================

const categoryBannerData = {

    fashion: [
        { image: "f1.webp", name: "Shop Now" },
        { image: "f2.webp", name: "Tee, Shirts" },
        { image: "f3.webp", name: "Jeans, Trousers" },
        { image: "f4.webp", name: "Casual Shoes" },
        { image: "f5.webp", name: "Sports Shoes" },
        { image: "f6.webp", name: "Watches" },
        { image: "f7.webp", name: "Kurta Pajama" },
        { image: "f8.webp", name: "Jeans, Trousers" },
        { image: "f9.webp", name: "Clogs" },
        { image: "f10.webp", name: "Trunk,vest" },
        { image: "f21.webp", name: "Wallet & Belts" },
        { image: "f22.webp", name: "Shop Now" },
        { image: "f23.webp", name: "Style Hub" },
        { image: "f11.webp", name: "Shop Now" },
        { image: "f12.webp", name: "Kurta sets" },
        { image: "f13.webp", name: "Dresses, Coords" },
        { image: "f14.webp", name: "Torlley bags" },
        { image: "f15.webp", name: "Dhanteras" },
        { image: "f16.webp", name: "Sarees" },
        { image: "f17.webp", name: "Kids Clothing " },
        { image: "f18.webp", name: "Jackets" },
        { image: "f19.webp", name: "Women Shoes" },
        { image: "f20.webp", name: "Backpacks" },
        { image: "f24.webp", name: "Kurtis" },
        { image: "f25.webp", name: "Korean Store" },
        { image: "f26.webp", name: "Trends" },

    ],

    mobile: [
        { image: "m11.webp", name: "iPhone" },
        { image: "m12.webp", name: "Motorola" },
        { image: "m13.webp", name: "realme" },
        { image: "m14.webp", name: "POCO" },
        { image: "m15.webp", name: "Google" },
        { image: "m16.webp", name: "HMD" },
        { image: "m17.webp", name: "boltt" },
        { image: "m18.webp", name: "MIVI" },
        { image: "m19.webp", name: "Tecno" },
        { image: "m20.webp", name: "Samsung" },
        { image: "m21.webp", name: "vivo" },
        { image: "m22.webp", name: "OPPO" },
        { image: "m23.webp", name: "Ai+" },
        { image: "m24.webp", name: "Nothing" },
        { image: "m25.webp", name: "Inflnix" },
        { image: "m26.webp", name: "LAVA" },
        { image: "m27.webp", name: "Redmi" },
        { image: "m28.webp", name: "Google One" },

    ],

    electronic: [
        { image: "be1.webp", name: "Gaming PCs" },
        { image: "be2.webp", name: "Tablets" },
        { image: "be3.webp", name: "Home Audio" },
        { image: "be4.webp", name: "Wearables" },
        { image: "be5.webp", name: "Laptops" },
        { image: "be6.webp", name: "Headphones" },
        { image: "be7.webp", name: "Cameras" },
        { image: "be8.webp", name: "Speakers" },
        { image: "be9.webp", name: "Laptops" },
        { image: "be10.webp", name: "Headphones" },
        { image: "be11.webp", name: "Cameras" },
        { image: "be12.webp", name: "Speakers" },
        { image: "be13.webp", name: "Laptops" },
        { image: "be14.webp", name: "Headphones" },
        { image: "be15.webp", name: "Cameras" },
        { image: "be16.webp", name: "Speakers" },
        { image: "be17.webp", name: "Speakers" },
        { image: "be18.webp", name: "Laptops" },
        { image: "be19.webp", name: "Headphones" },
        { image: "be20.webp", name: "Cameras" },
        { image: "be21.webp", name: "Speakers" },
    ],

    beauty: [
        { image: "bb1.webp", name: "Makeup" },
        { image: "bb2.webp", name: "Skincare" },
        { image: "bb3.webp", name: "Hair Care" },
        { image: "bb4.webp", name: "Makeup" },
        { image: "bb5.webp", name: "Skincare" },
        { image: "bb6.webp", name: "Hair Care" },
        { image: "bb7.webp", name: "Makeup" },
        { image: "bb8.webp", name: "Skincare" },
        { image: "bb9.webp", name: "Hair Care" },
        { image: "bb10.webp", name: "Makeup" },
        { image: "bb11.webp", name: "Skincare" },
        { image: "bb12.webp", name: "Hair Care" },
        { image: "bb13.webp", name: "Makeup" },
        { image: "bb14.webp", name: "Skincare" },
        { image: "bb15.webp", name: "Hair Care" },
    ],

    home: [
        { image: "h1.webp", name: "Furniture" },
        { image: "h2.webp", name: "Kitchen" },
        { image: "h3.webp", name: "Decor" }
    ]

};


// =====================================
// RENDER CATEGORY BANNER
// =====================================

// async function loadCategoryBanner(categoryName) {

//     const container = document.getElementById("categoryBanner");

//     if (!container) {
//         console.error("Category banner container not found!");
//         return;
//     }

//     const categories = categoryBannerData[categoryName] || [];

//     container.innerHTML = `
//     <div>
//         <div class="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-10 gap-2">

//             ${categories.map(item => `
//                 <a href="${item.link || '#'}"
//                    class="flex flex-col items-center text-center min-w-0">

//                     <img
//                         src="assets/category/${categoryName}/${item.image}"
//                         alt="${item.name}"
//                         loading="lazy"
//                         class="w-full h-20 sm:h-24 md:h-28 object-contain"
//                     >

//                     <p class="text-xs sm:text-sm font-medium mt-2 truncate w-full">
//                         ${item.name}
//                     </p>

//                 </a>
//             `).join("")}

//         </div>
//     </div>
//     `;
// }

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

                ${categories.map(item => `
                    <a href="${item.link || '#'}"
                       class="flex flex-col items-center text-center w-25">

                        <img
                            src="assets/category/${categoryName}/${item.image}"
                            alt="${item.name}"
                            loading="lazy"
                            class="w-full h-20 sm:h-24 object-contain"
                        >

                        <p class="text-xs sm:text-sm font-medium mt-2 truncate w-full">
                            ${item.name}
                        </p>

                    </a>
                `).join("")}

            </div>

        </div>
    `;
}