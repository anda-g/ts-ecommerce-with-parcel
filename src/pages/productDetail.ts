import getProductById from "../api/getProductById";

export default function ProductDetail(id: string): HTMLElement {
  const container = document.createElement("div");
  container.className =
    "min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300";

  container.innerHTML = /*html*/ `
    <div class="animate-pulse px-4 md:px-8 max-w-7xl mx-auto pt-30 py-8">
      <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
      <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
      <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
      <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 mb-6"></div>
      <div class="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6"></div>
      <div class="flex gap-4">
        <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
        <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
      </div>
    </div>
  `;

  try {
    getProductById(id).then((product) => {
      container.innerHTML = /*html*/ `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-30">
          <div class="flex flex-col md:flex-row gap-8">
            <!-- Image Gallery -->
            <div class="md:w-1/2">
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-4">
                <img 
                  src="${product?.thumbnail || "/placeholder-product.jpg"}" 
                  alt="${product?.title || "Product image"}"
                  class="w-full h-80 md:h-96 object-contain p-4"
                  onerror="this.src='/placeholder-product.jpg'"
                />
              </div>
              <div class="grid grid-cols-4 gap-2">
                ${
                  product?.images
                    ?.slice(0, 4)
                    .map(
                      (image) => `
                  <div class="bg-white dark:bg-gray-800 rounded-md shadow-sm overflow-hidden">
                    <img 
                      src="${image || "/placeholder-product.jpg"}" 
                      alt="${product?.title || "Product thumbnail"}"
                      class="w-full h-20 object-contain p-1"
                      onerror="this.src='/placeholder-product.jpg'"
                    />
                  </div>
                `
                    )
                    .join("") || ""
                }
              </div>
            </div>

            <!-- Product Info -->
            <div class="md:w-1/2">
              <div class="mb-6">
                <span class="text-sm text-green-600 dark:text-green-400 font-medium">
                  ${product?.category || "No category"}
                </span>
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
                  ${product?.title || "No title available"}
                </h1>
                <div class="flex items-center mb-4">
                  <div class="flex items-center">
                    ${Array.from({ length: 5 })
                      .map(
                        (_, i) => `
                      <svg class="w-5 h-5 ${
                        i < Math.floor(product?.rating || 0)
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-500"
                      }" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    `
                      )
                      .join("")}
                    <span class="text-gray-600 dark:text-gray-400 ml-2">
                      ${product?.rating || "0"} (${
        product?.reviews?.length || "0"
      } reviews)
                    </span>
                  </div>
                </div>

                <p class="text-gray-700 dark:text-gray-300 mb-6">
                  ${product?.description || "No description available"}
                </p>

                <div class="mb-6">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    $${product?.price?.toFixed(2) || "0.00"}
                  </span>
                  ${
                    product?.discountPercentage
                      ? `
                    <span class="ml-2 text-sm text-green-600 dark:text-green-400">
                      ${product.discountPercentage}% off
                    </span>
                  `
                      : ""
                  }
                </div>

                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Brand</h3>
                    <p class="text-gray-900 dark:text-white">${
                      product?.brand || "AnyMart"
                    }</p>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">SKU</h3>
                    <p class="text-gray-900 dark:text-white">${
                      product?.sku || "N/A"
                    }</p>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Availability</h3>
                    <p class="flex items-center">
                      <span class="flex w-2 h-2 ${
                        product?.availabilityStatus === "In Stock"
                          ? "bg-green-500"
                          : "bg-red-500"
                      } rounded-full mr-2"></span>
                      <span class="text-gray-900 dark:text-white">
                        ${product?.availabilityStatus || "Availability unknown"}
                      </span>
                    </p>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Weight</h3>
                    <p class="text-gray-900 dark:text-white">${
                      product?.weight ? `${product.weight}g` : "N/A"
                    }</p>
                  </div>
                </div>

                <div class="flex items-center gap-4 mb-6">
                  <div class="flex items-center">
                    <button class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-l-md">-</button>
                    <span class="bg-gray-100 dark:bg-gray-800 px-4 py-1">1</span>
                    <button class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-r-md">+</button>
                  </div>
                  <button class="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>

              <!-- Additional Info Accordion -->
              <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div class="mb-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Product Details</h3>
                  <div class="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <h4 class="text-sm text-gray-500 dark:text-gray-400">Dimensions</h4>
                      <p class="text-gray-900 dark:text-white">
                        ${
                          product?.dimensions
                            ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`
                            : "N/A"
                        }
                      </p>
                    </div>
                    <div>
                      <h4 class="text-sm text-gray-500 dark:text-gray-400">Warranty</h4>
                      <p class="text-gray-900 dark:text-white">${
                        product?.warrantyInformation || "N/A"
                      }</p>
                    </div>
                    <div>
                      <h4 class="text-sm text-gray-500 dark:text-gray-400">Shipping</h4>
                      <p class="text-gray-900 dark:text-white">${
                        product?.shippingInformation || "N/A"
                      }</p>
                    </div>
                    <div>
                      <h4 class="text-sm text-gray-500 dark:text-gray-400">Return Policy</h4>
                      <p class="text-gray-900 dark:text-white">${
                        product?.returnPolicy || "N/A"
                      }</p>
                    </div>
                  </div>
                </div>

                ${
                  product?.tags?.length
                    ? `
                  <div class="mt-4">
                    <h4 class="text-sm text-gray-500 dark:text-gray-400 mb-2">Tags</h4>
                    <div class="flex flex-wrap gap-2">
                      ${product.tags
                        .map(
                          (tag) => `
                        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                          ${tag}
                        </span>
                      `
                        )
                        .join("")}
                    </div>
                  </div>
                `
                    : ""
                }
              </div>
            </div>
          </div>

          <!-- Reviews Section -->
          ${
            product?.reviews?.length
              ? `
            <div class="mt-16">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Customer Reviews</h2>
              <div class="space-y-4">
                ${product.reviews
                  .map(
                    (review) => `
                  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <div class="flex items-center mb-4">
                      <div class="flex items-center mr-4">
                        ${Array.from({ length: 5 })
                          .map(
                            (_, i) => `
                          <svg class="w-5 h-5 ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-500"
                          }" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        `
                          )
                          .join("")}
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-900 dark:text-white">${
                          review.reviewerName || "Anonymous"
                        }</h4>
                        <p class="text-sm text-gray-500 dark:text-gray-400">${
                          review.date || ""
                        }</p>
                      </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300">${
                      review.comment || "No comment provided"
                    }</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }
        </div>
      `;
    });
  } catch (error) {
    console.error("Failed to load product:", error);
    container.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 p-4 rounded-md">
          <h3 class="text-lg font-medium">Error loading product details</h3>
          <p class="mt-2">Please try again later or contact support if the problem persists.</p>
        </div>
      </div>
    `;
  }

  return container;
}
