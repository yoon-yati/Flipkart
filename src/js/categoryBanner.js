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

    categoryhome: [
        { image: "bh1.webp", name: "Furniture" },
        { image: "bh2.webp", name: "Kitchen" },
        { image: "bh3.webp", name: "Decor" },
        { image: "bh4.webp", name: "Furniture" },
        { image: "bh5.webp", name: "Kitchen" },
        { image: "bh6.webp", name: "Decor" },
        { image: "bh7.webp", name: "Furniture" },
        { image: "bh8.webp", name: "Decor" },
        { image: "bh9.webp", name: "Furniture" },
        { image: "bh10.webp", name: "Kitchen" },
        { image: "bh11.webp", name: "Decor" },
        { image: "bh12.webp", name: "Furniture" },
        { image: "bh13.webp", name: "Kitchen" },
        { image: "bh14.webp", name: "Decor" },
        { image: "bh15.webp", name: "Furniture" },
        { image: "bh16.webp", name: "Kitchen" },
        { image: "bh17.webp", name: "Decor" },
        { image: "bh18.webp", name: "Furniture" },
        { image: "bh19.webp", name: "Kitchen" },
        { image: "bh20.webp", name: "Decor" },
        { image: "bh21.webp", name: "Furniture" },
        { image: "bh22.webp", name: "Kitchen" },
        { image: "bh23.webp", name: "Decor" },
        { image: "bh24.webp", name: "Furniture" },

    ],

    appliance: [
        { image: "ba1.webp", name: "Shop Now" },
        { image: "ba2.webp", name: "Tee, Shirts" },
        { image: "ba3.webp", name: "Jeans, Trousers" },
        { image: "ba4.webp", name: "Casual Shoes" },
        { image: "ba5.webp", name: "Sports Shoes" },
        { image: "ba6.webp", name: "Watches" },
        { image: "ba7.webp", name: "Kurta Pajama" },
        { image: "ba8.webp", name: "Jeans, Trousers" },
        { image: "ba9.webp", name: "Clogs" },
        { image: "ba10.webp", name: "Trunk,vest" },
        { image: "ba11.webp", name: "Wallet & Belts" },
        { image: "ba12.webp", name: "Shop Now" },
        { image: "ba13.webp", name: "Style Hub" },
        { image: "ba14.webp", name: "Shop Now" },
        { image: "ba15.webp", name: "Kurta sets" },
        { image: "ba16.webp", name: "Dresses, Coords" },

    ],

    toy: [
        { image: "bt1.webp", name: "Shop Now" },
        { image: "bt2.webp", name: "Tee, Shirts" },
        { image: "bt3.webp", name: "Jeans, Trousers" },
        { image: "bt4.webp", name: "Casual Shoes" },
        { image: "bt5.webp", name: "Sports Shoes" },
        { image: "bt6.webp", name: "Watches" },
        { image: "bt7.webp", name: "Kurta Pajama" },
        { image: "bt8.webp", name: "Jeans, Trousers" },
        { image: "bt9.webp", name: "Clogs" },
        { image: "bt10.webp", name: "Trunk,vest" },
        { image: "bt11.webp", name: "Wallet & Belts" },
        { image: "bt12.webp", name: "Shop Now" },
        { image: "bt13.webp", name: "Style Hub" },
        { image: "bt14.webp", name: "Shop Now" },


    ],

    food: [
        { image: "bf1.webp", name: "Furniture" },
        { image: "bf2.webp", name: "Kitchen" },
        { image: "bf3.webp", name: "Decor" },
        { image: "bf4.webp", name: "Furniture" },
        { image: "bf5.webp", name: "Kitchen" },
        { image: "bf6.webp", name: "Decor" },
        { image: "bf7.webp", name: "Furniture" },
        { image: "bf8.webp", name: "Decor" },
        { image: "bf9.webp", name: "Furniture" },
        { image: "bf10.webp", name: "Kitchen" },
        { image: "bf11.webp", name: "Decor" },
        { image: "bf12.webp", name: "Furniture" },
        { image: "bf13.webp", name: "Kitchen" },
        { image: "bf14.webp", name: "Decor" },
        { image: "bf15.webp", name: "Furniture" },
        { image: "bf16.webp", name: "Kitchen" },
        { image: "bf17.webp", name: "Decor" },
        { image: "bf18.webp", name: "Furniture" },
        { image: "bf19.webp", name: "Kitchen" },


    ],

    accessorie: [
        { image: "ba1.webp", name: "Shop Now" },
        { image: "ba2.webp", name: "Tee, Shirts" },
        { image: "ba3.webp", name: "Jeans, Trousers" },
        { image: "ba4.webp", name: "Casual Shoes" },
        { image: "ba5.webp", name: "Sports Shoes" },
        { image: "ba6.webp", name: "Watches" },
        { image: "ba7.webp", name: "Kurta Pajama" },
        { image: "ba8.webp", name: "Jeans, Trousers" },
        { image: "ba9.webp", name: "Clogs" },
        { image: "ba10.webp", name: "Trunk,vest" },
        { image: "ba11.webp", name: "Wallet & Belts" },
        { image: "ba12.webp", name: "Shop Now" },
        { image: "ba13.webp", name: "Style Hub" },


    ],

    sport: [
        { image: "bs1.webp", name: "Furniture" },
        { image: "bs2.webp", name: "Kitchen" },
        { image: "bs3.webp", name: "Decor" },
        { image: "bs4.webp", name: "Furniture" },
        { image: "bs5.webp", name: "Kitchen" },
        { image: "bs6.webp", name: "Decor" },
        { image: "bs7.webp", name: "Furniture" },
        { image: "bs8.webp", name: "Decor" },
        { image: "bs9.webp", name: "Furniture" },
        { image: "bs10.webp", name: "Kitchen" },
        { image: "bs11.webp", name: "Decor" },
        { image: "bs12.webp", name: "Furniture" },
        { image: "bs13.webp", name: "Kitchen" },
        { image: "bs14.webp", name: "Decor" },
        { image: "bs15.webp", name: "Furniture" },


    ],



    furniture: [
        { image: "bf1.webp", name: "Furniture" },
        { image: "bf2.webp", name: "Kitchen" },
        { image: "bf3.webp", name: "Decor" },
        { image: "bf4.webp", name: "Furniture" },
        { image: "bf5.webp", name: "Kitchen" },
        { image: "bf6.webp", name: "Decor" },
        { image: "bf7.webp", name: "Furniture" },
        { image: "bf8.webp", name: "Decor" },
        { image: "bf9.webp", name: "Furniture" },
        { image: "bf10.webp", name: "Kitchen" },
        { image: "bf11.webp", name: "Decor" },
        { image: "bf12.webp", name: "Furniture" },
        { image: "bf13.webp", name: "Kitchen" },
        { image: "bf14.webp", name: "Decor" },
        { image: "bf15.webp", name: "Furniture" },
        { image: "bf16.webp", name: "Kitchen" },
        { image: "bf17.webp", name: "Decor" },
        { image: "bf18.webp", name: "Furniture" },
        { image: "bf19.webp", name: "Kitchen" },
        { image: "bf20.webp", name: "Decor" },
        { image: "bf21.webp", name: "Furniture" },
        { image: "bf22.webp", name: "Kitchen" },

    ],

    book: [
        { image: "bb1.webp", name: "Furniture" },
        { image: "bb2.webp", name: "Kitchen" },
        { image: "bb3.webp", name: "Decor" },
        { image: "bb4.webp", name: "Furniture" },
        { image: "bb5.webp", name: "Kitchen" },
        { image: "bb6.webp", name: "Decor" },
        { image: "bb7.webp", name: "Furniture" },
        { image: "bb8.webp", name: "Decor" },
        { image: "bb9.webp", name: "Furniture" },
        { image: "bb10.webp", name: "Kitchen" },
        { image: "bb11.webp", name: "Decor" },
        { image: "bb12.webp", name: "Furniture" },
        { image: "bb13.webp", name: "Kitchen" },


    ],


    wheel: [
        { image: "bw1.webp", name: "Furniture" },
        { image: "bw2.webp", name: "Kitchen" },
        { image: "bw3.webp", name: "Decor" },
        { image: "bw4.webp", name: "Furniture" },
        { image: "bw5.webp", name: "Kitchen" },
        { image: "bw6.webp", name: "Decor" },
        { image: "bw7.webp", name: "Furniture" },
        { image: "bw8.webp", name: "Decor" },
        { image: "bw9.webp", name: "Furniture" },
        { image: "bw10.webp", name: "Kitchen" },
        { image: "bw11.webp", name: "Decor" },
        { image: "bw12.webp", name: "Furniture" },
        { image: "bw13.webp", name: "Kitchen" },
        { image: "bw14.webp", name: "Decor" },
        { image: "bw15.webp", name: "Furniture" },
        { image: "bw16.webp", name: "Kitchen" },
        { image: "bw17.webp", name: "Decor" },
        { image: "bw18.webp", name: "Furniture" },
        { image: "bw19.webp", name: "Kitchen" },
        { image: "bw20.webp", name: "Decor" },
        { image: "bw21.webp", name: "Furniture" },
        { image: "bw22.webp", name: "Kitchen" },

    ],


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