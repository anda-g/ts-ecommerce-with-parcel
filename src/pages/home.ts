import getAllProducts from "../api/getAllProducts";
import CategoryCard from "../components/categoryCard";
import FeatureCard from "../components/featureCard";
import { productCard } from "../components/productCard";
import { categories } from "../data/categoryData";
import { featuresData } from "../data/homeData";
import { Product } from "../type/productType";

export default function Home(): HTMLElement {
  const element = document.createElement("div");
  element.innerHTML = /*html*/ `
    <!-- Hero Section -->
    <section class="min-h-screen pt-20 px-6 md:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto py-12 z-0">
        <div class="lg:w-1/2 space-y-8">
            <div class="space-y-6">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
                    <span >Elevate Your Space With</span>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Premium Furnishings</span>
                </h1>
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                    Curated collection of designer furniture crafted with precision and sustainable materials. Transform your environment with pieces that combine form and function.
                </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
                <button class="px-8 py-3.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-green-100 dark:shadow-green-900/50">
                    Explore Collection
                </button>
                <button class="px-8 py-3.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                    Book Consultation
                </button>
            </div>
            
            <div class="grid grid-cols-3 gap-4 pt-6 max-w-md">
                <div class="flex flex-col p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-2xl font-bold text-green-600 dark:text-green-400">10+</span>
                    <span class="text-gray-600 dark:text-gray-400 text-sm">Awards</span>
                </div>
                <div class="flex flex-col p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-2xl font-bold text-green-600 dark:text-green-400">100%</span>
                    <span class="text-gray-600 dark:text-gray-400 text-sm">Sustainable</span>
                </div>
                <div class="flex flex-col p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span class="text-2xl font-bold text-green-600 dark:text-green-400">5Y</span>
                    <span class="text-gray-600 dark:text-gray-400 text-sm">Warranty</span>
                </div>
            </div>
        </div>
        
        <div class="lg:w-1/2 h-2/3 relative z-0">
            <div class="relative rounded-xl overflow-hidden shadow-2xl group">
                <!-- Product image with dark mode overlay adjustment -->
                <img 
                    class="w-full max-h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://cdn.midjourney.com/7d59d8c3-4cb0-45b6-8c5a-af076246ae1c/0_0.png" 
                    alt="Premium lounge chair"
                    loading="lazy"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent dark:from-black/50"></div>
            </div>
            
            <!-- Floating elements with dark mode support -->
            <div class="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg w-36 animate-float">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-800 dark:text-gray-200 text-sm">Handcrafted</h4>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Artisan quality</p>
                    </div>
                </div>
            </div>
            
            <div class="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg w-36 animate-float delay-200">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-800 dark:text-gray-200 text-sm">Eco-Friendly</h4>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Sustainable materials</p>
                    </div>
                </div>
            </div>
            
            <!-- Price Tag -->
            <div class="absolute top-6 right-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-full shadow-md animate-pulse-slow">
                <span class="font-medium">$899<span class="text-white/80 text-sm font-normal"> starting</span></span>
            </div>
        </div>
    </section>

<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
      <div>
        <span class="text-sm font-medium text-green-700 mb-2 block">SHOP BY CATEGORY</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Browse Collections</h2>
        <div class="w-16 h-1 bg-green-700 mt-3"></div>
      </div>
      <a href="#/shop" class="flex items-center text-green-700 hover:text-green-800 mt-4 md:mt-0 group transition-colors">
        <span class="font-medium">View all categories</span>
        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>

    <div id="category-container" class="flex flex-nowrap scrollbar-hide scroll-smooth overflow-x-scroll overflow-y-hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
      <!-- Category cards will be inserted here -->
      
    </div>
  </div>
</section>

    <!-- Product section -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6 md:px-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
                <span class="text-sm font-medium text-green-700 mb-2 block">PREMIUM SELECTION</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Featured Products</h2>
                <div class="w-16 h-1 bg-green-700 mt-3"></div>
            </div>
            <a href="#/shop" class="flex items-center text-green-700 hover:text-green-800 mt-4 md:mt-0 group transition-colors">
                <span class="font-medium">View all products</span>
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </a>
            </div>

            <div id="product-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Product cards will be inserted here -->
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-6 md:px-8">
            <div class="lg:text-center">
                <h2 class="text-base text-green-600 font-semibold tracking-wide uppercase">AnyMart</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Why Shop With Us?
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    We’re committed to making your shopping experience seamless, secure, and satisfying. Here’s what makes us different:
                </p>
            </div>

            <div class="mt-10">
                <dl id="feature-container" class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    
                </dl>
            </div>
        </div>
    </section>

    
  `;

  const categoryContainer = element.querySelector(
    "#category-container"
  ) as HTMLElement;
  categories.forEach((data) => {
    const card = CategoryCard(data);
    categoryContainer?.appendChild(card);
  });

  const featureContainer = element.querySelector("#feature-container");
  featuresData.forEach((data) => {
    let card = FeatureCard(data);
    featureContainer?.appendChild(card);
  });
  const productContainer = element.querySelector("#product-container");
  async function fetchAllProducts(): Promise<void> {
    const products: Product[] = (await getAllProducts()).sort((a, b) => {
      if (a.rating !== b.rating) return b.rating - a.rating;
      return a.price - b.price;
    });
    if (products) {
      products?.slice(0, 8).forEach((product) => {
        const card = productCard(product);
        productContainer?.appendChild(card);
      });
    }
  }
  fetchAllProducts();
  return element;
}
