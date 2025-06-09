import { Product } from "../type/productType";

export const productCard = (product: Product) => {
  const element = document.createElement("div");
  element.className = "product-card group"; // Added group for hover effects

  element.innerHTML = /*html*/ `
  <div class="w-full h-fit max-w-sm rounded-md overflow-hidden bg-white border border-gray-100 shadow-md transition-transform hover:scale-[1.01] hover:shadow-lg">
    <div class="h-full w-full overflow-hidden">
      <img src="${product.thumbnail}" alt="${
    product.title
  }" class="w-full h-full object-cover object-center" />
    </div>
    <div class="p-4 flex flex-col gap-4 ">
      <div class="space-y-2">
        <h2 class="text-lg font-semibold text-green-950 line-clamp-1">${
          product.title
        }</h2>
        <p class="text-sm text-neutral-400 line-clamp-2">${
          product.description
        }</p>
        <div class="flex items-center text-sm gap-2">
          <span class="text-yellow-400 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 24 24"><path d="M12 17.25l-6.172 3.944 1.18-6.885L2 9.75l6.914-1.005L12 2.25l3.086 6.495L22 9.75l-5.008 4.559 1.18 6.885z"/></svg>
            ${product.rating.toFixed(1)}
          </span>
          <span class="text-neutral-500">(${
            product.reviews.length
          } reviews)</span>
        </div>
        <div class="flex flex-wrap gap-2 text-xs mt-2">
          <span class="bg-green-600/10 text-green-400 px-2 py-1 rounded-full">${
            product.availabilityStatus
          }</span>
          <span class="bg-green-400/20 text-neutral-400 px-2 py-1 rounded-full">Brand: ${
            product.brand || "AnyMart"
          }</span>
        </div>
      </div>
      <div class="flex justify-between items-end mt-4">
        <div>
          <div class="text-green-400 font-semibold text-base">$${(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}</div>
          <div class="text-xs text-neutral-500 line-through">$${product.price.toFixed(
            2
          )}</div>
        </div>
        <button class="bg-gradient-to-r from-green-600 to-emerald-500 hover:bg-gradient-to-l duration-300 ease-in-out text-white text-sm px-4 py-2 rounded-md transition-all">Buy Now</button>
      </div>
    </div>
  </div>
`;

  return element;
};
