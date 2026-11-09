// ======================================
// REUSABLE PROMOTIONAL BANNER
// ======================================

function renderPromoBanners(categoryName, containerId = "promoBanners") {

    const container = document.getElementById(containerId);

    if (!container) {
        console.error("Promo banner container not found!");
        return;
    }

    const banners = promoBannerData[categoryName] || [];

    if (!banners.length) {
        container.innerHTML = "";
        console.warn(`No promo banners found for ${categoryName}`);
        return;
    }

    container.innerHTML = banners.map((banner, index) => `

        <section
            class="relative w-full overflow-hidden rounded-2xl p-3 sm:p-4 bg-cover bg-center"
            style="background-image: url('${banner.background}')"
        >

            <!-- Banner Title -->
            <div class="relative z-10 mb-2">

                <h2 class="text-black text-lg sm:text-xl font-bold drop-shadow">
                    ${banner.title}
                </h2>

                ${banner.countdown ? `
                    <span class="inline-block bg-white text-gray-800
                                 text-xs font-semibold rounded px-3 py-1 mt-1">
                        ${banner.countdown}
                    </span>
                ` : ""}

            </div>

            <!-- Product Carousel -->
            <div class="relative">

                <div
                    id="promo-track-${index}"
                    class="flex gap-3 overflow-x-auto scroll-smooth
                           snap-x snap-mandatory scrollbar-hide
                           pb-1"
                >

                    ${banner.products.map(product => `

                        <a href="${product.link || '#'}"
                           class="group flex-none w-[140px] sm:w-[165px]
                                  snap-start text-center">

                            <!-- Product Image -->
                            <div class="relative h-[170px] sm:h-[185px]
                                        bg-white rounded-2xl overflow-hidden">

                                <img
                                    src="${product.image}"
                                    alt="${product.name}"
                                    loading="lazy"
                                    class="w-full h-full object-cover
                                           group-hover:scale-105
                                           transition-transform duration-300"
                                >

                                <!-- Offer Price -->
                                <div class="absolute bottom-0 left-0 w-full
                                            bg-gradient-to-t from-yellow-300
                                            to-yellow-200 py-2 px-1">

                                    <p class="text-black text-sm sm:text-base
                                              font-bold truncate">
                                        ${product.offer}
                                    </p>

                                </div>

                            </div>

                            <!-- Product Name -->
                            <p class="text-white text-sm sm:text-base
                                      mt-2 truncate">
                                ${product.name}
                            </p>

                        </a>

                    `).join("")}

                </div>

                <!-- Next Button -->
                <button
                    type="button"
                    data-direction="next"
                    data-track="promo-track-${index}"
                    class="absolute right-0 top-1/2 -translate-y-1/2
                           z-20 bg-white hover:bg-gray-100
                           shadow-lg rounded-full
                           w-10 h-10 flex items-center justify-center"
                    aria-label="Next products"
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24"
                         stroke-width="2" stroke="currentColor"
                         class="w-6 h-6">
                        <path stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m9 18 6-6-6-6" />
                    </svg>
                </button>

                <!-- Previous Button -->
                <button
                    type="button"
                    data-direction="prev"
                    data-track="promo-track-${index}"
                    class="absolute left-0 top-1/2 -translate-y-1/2
                           z-20 bg-white hover:bg-gray-100
                           shadow-lg rounded-full
                           w-10 h-10 flex items-center justify-center"
                    aria-label="Previous products"
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24"
                         stroke-width="2" stroke="currentColor"
                         class="w-6 h-6">
                        <path stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m15 18-6-6 6-6" />
                    </svg>
                </button>

            </div>

        </section>

    `).join("");


    // ======================================
    // CAROUSEL BUTTON EVENTS
    // ======================================

    container.querySelectorAll("[data-track]").forEach(button => {

        button.addEventListener("click", () => {

            const trackId = button.dataset.track;
            const direction = button.dataset.direction;

            const track = document.getElementById(trackId);

            if (!track) return;

            track.scrollBy({
                left: direction === "next"
                    ? track.clientWidth * 0.8
                    : -track.clientWidth * 0.8,

                behavior: "smooth"
            });

        });

    });

}

// Make function globally accessible
window.renderPromoBanners = renderPromoBanners;