export default function Footer(): HTMLElement {
  const element = document.createElement("footer");
  element.innerHTML = /*html*/ `
    <footer class="bg-gray-900 dark:bg-gray-950 text-gray-100 pt-16 pb-8 px-6 md:px-8 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">
            <div class="md:col-span-4 lg:col-span-6 max-w-md">
                <h3 class="text-2xl font-normal mb-6 leading-tight">Keep up to date with our quarterly newsletter,
                    "You've got mail."</h3>
                <div class="mt-4 space-y-4">
                    <input type="email" placeholder="Enter email address..." class="newsletter-input w-full px-4 py-3 bg-gray-800 dark:bg-gray-900 rounded text-white border border-gray-700 dark:border-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors">
                    <button class="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full flex items-center font-medium transition-colors">
                        Subscribe
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="hidden md:block md:col-span-1 lg:hidden"></div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10">
                <div>
                    <h3 class="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">Get in Touch</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Start a Project</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Join the Team</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Press & Media</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Drop Us a Note</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">See More</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Home</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Work</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Services</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Latest</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">About</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Careers</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div class="sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <h3 class="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">Follow Us</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Instagram</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">LinkedIn</a></li>
                        <li><a href="#" class="text-sm hover:text-green-400 transition-colors">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mt-16 pt-6 border-t border-gray-800 dark:border-gray-800">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div class="flex space-x-6 mb-4 md:mb-0">
                    <a href="#" class="text-xs text-gray-400 hover:text-green-400 transition-colors">Sitemap</a>
                    <a href="#" class="text-xs text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
                </div>
                <div class="text-xs text-gray-400">
                    © 2025, AnyMart. All Rights Reserved.
                </div>
            </div>
        </div>
    </div>
</footer>
  `;
  return element;
}
