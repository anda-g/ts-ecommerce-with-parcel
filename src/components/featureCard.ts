import { Feature } from "../type/homeType";

export default function FeatureCard(feature: Feature): HTMLElement {
  const element = document.createElement("div");
  element.classList.add("relative");
  element.innerHTML = /*html*/ `
    <dt>
        <div
            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
            <!-- Heroicon name: outline/globe-alt -->
            <span class="material-icons"> ${feature.iconName} </span>
        </div>
        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">${feature.title}</p>
    </dt>
    <dd class="mt-2 ml-16 text-base text-gray-500">
        ${feature.description}
    </dd>
    `;
  return element;
}
