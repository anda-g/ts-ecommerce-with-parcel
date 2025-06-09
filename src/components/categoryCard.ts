import { Category } from "../type/productType";

export default function CategoryCard(category: Category): HTMLElement {
  const element = document.createElement("div");

  element.innerHTML = /*html*/ `
    <div class="w-[300px] md:w-full bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
      <!-- Icon -->
      <div class="text-green-600 mb-4 bg-green-100 mr-auto rounded-md">
        <span class="material-icons p-2 text-4xl">
          ${category.iconName}
        </span>
      </div>
      
      <!-- Heading -->
      <div class="text-2xl font-medium tracking-tight text-gray-900">
        ${category.title}
      </div>
      
      <!-- Paragraph -->
      <div class="text-sm text-gray-500 mt-2 line-clamp-1">
        ${category.description}
      </div>
      
      <!-- Divider -->
      <div class="h-[1px] w-full bg-gray-200 my-5"></div>
      
      <!-- Button -->
      <div class="inline-flex items-center text-black cursor-pointer text-xs bg-gray-100 px-2 py-1.5 rounded mr-auto">
        <a href="#/shop">Shop now</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </div>
    </div>
  `;

  return element;
}
