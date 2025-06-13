export default function Header(): HTMLElement {
  const element = document.createElement("header");
  element.innerHTML = /*html*/ `
        <header class="fixed w-full h-20  bg-white border-b-2 border-gray-200 flex items-center z-10">
            <div class="flex items-center justify-between w-full max-w-7xl mx-auto">
                <a class="text-lg font-bold" href="#/">AnyMart</a>
                <nav>
                    <ul class="flex space-x-8">
                    <li><a class="text-sm" href="#/">Home</a></li>
                    <li><a class="text-sm" href="#/shop">Shop</a></li>
                    <li><a class="text-sm" href="#/service">Service</a></li>
                    </ul>
                </nav>
                <ul class="flex space-x-4">
                    <li>
                    <a
                        class="bg-[#F1F1F1] h-9 w-9 rounded-full flex items-center justify-center"
                        href=""
                    >
                        <i class="fa-solid fa-circle-half-stroke "></i>
                    </a>
                    </li>
                    <li>
                    <a
                        class="bg-[#F1F1F1] h-9 w-9 rounded-full flex items-center justify-center"
                        href=""
                    >
                        <i class="fa-solid fa-user"></i>
                    </a>
                    </li>
                </ul>
            </div>
        </header>    
    `;
  return element;
}
