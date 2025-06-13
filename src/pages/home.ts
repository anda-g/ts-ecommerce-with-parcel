import getAllProducts from "../api/getAllProducts";
import CategoryCard from "../components/categoryCard";
import FeatureCard from "../components/featureCard";
import { productCard } from "../components/productCard";
import { categories } from "../data/categoryData";
import { featuresData } from "../data/homeData";
import { Product } from "../type/productType";

export default function Home(): HTMLElement {
  const element = document.createElement("div");
  element.className = "flex flex-col gap-20";
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

    <!-- Other Product-->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6 md:px-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
                <span class="text-sm font-medium text-green-700 mb-2 block">NEW STOCK</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Other Products</h2>
                <div class="w-16 h-1 bg-green-700 mt-3"></div>
            </div>
            <a href="#/shop" class="flex items-center text-green-700 hover:text-green-800 mt-4 md:mt-0 group transition-colors">
                <span class="font-medium">View all products</span>
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </a>
            </div>

            <div id="other-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

    <!-- What people say section -->
    <section class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-10">What People Are Saying</h2>

    <div class="flex flex-wrap gap-6 justify-center">
      <!-- Testimonial Card -->
      <div class="bg-white shadow-md rounded-2xl p-6 max-w-sm flex flex-col items-start hover:shadow-xl transition">
        <div class="flex items-center mb-4">
          <img class="w-12 h-12 rounded-full border-2 border-indigo-500" src="https://i.pravatar.cc/150?img=12" alt="User avatar">
          <div class="ml-4">
            <h4 class="text-lg font-semibold text-gray-900">Sokha Chan</h4>
            <p class="text-sm text-gray-500">VIP Customer</p>
          </div>
        </div>
        <p class="text-gray-600 text-sm">"This was hands down the best purchase I've made all year. The product quality was top-notch and delivery was fast. I’ll definitely be back for more!"</p>
      </div>

      <!-- Testimonial Card -->
      <div class="bg-white shadow-md rounded-2xl p-6 max-w-sm flex flex-col items-start hover:shadow-xl transition">
        <div class="flex items-center mb-4">
          <img class="w-12 h-12 rounded-full border-2 border-indigo-500" src="https://i.pravatar.cc/150?img=32" alt="User avatar">
          <div class="ml-4">
            <h4 class="text-lg font-semibold text-gray-900">Vannak Meas</h4>
            <p class="text-sm text-gray-500">Loyal Customer</p>
          </div>
        </div>
        <p class="text-gray-600 text-sm">"I didn’t expect this product to be this good. It looked exactly like the photos and works perfectly. Highly recommended for anyone!"</p>
      </div>

      <!-- Testimonial Card -->
      <div class="bg-white shadow-md rounded-2xl p-6 max-w-sm flex flex-col items-start hover:shadow-xl transition">
        <div class="flex items-center mb-4">
          <img class="w-12 h-12 rounded-full border-2 border-indigo-500" src="https://i.pravatar.cc/150?img=22" alt="User avatar">
          <div class="ml-4">
            <h4 class="text-lg font-semibold text-gray-900">Dara Koun</h4>
            <p class="text-sm text-gray-500">First-Time Shopper</p>
          </div>
        </div>
        <p class="text-gray-600 text-sm">"I was honestly surprised by how great the product was for the price. Super affordable, well-packaged, and just what I needed."

</p>
      </div>
    </div>
  </div>
</section>
    
<section class="w-full flex ">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center space-y-5">
            <h2 class="text-base font-semibold text-green-400 tracking-wide uppercase">Get started now</h2>
            <div class="inline-flex items-end justify-center w-full text-center mx-auto">
                <img src="https://randomuser.me/api/portraits/men/47.jpg"
                    class="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/men/49.jpg"
                    class="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/women/46.jpg"
                    class="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/men/48.jpg"
                    class="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white">
                <img src="https://randomuser.me/api/portraits/women/43.jpg"
                    class="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative">
            </div>
            <p class="mt-1 text-4xl sm:text-5xl font-extrabold text-gray-900 sm:tracking-tight">Discover
                your
                potential
                <span class="px-2 py-1 relative inline-block">
                    <svg class="stroke-current bottom-0 absolute text-green-300 -translate-x-2" viewBox="0 0 410 18"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="12" fill="none"
                            fill-rule="evenodd" stroke-linecap="round"></path>
                    </svg>
                    <span class="relative">with us</span>
                </span>
            </p>

            <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
                Sign up now and experience the difference in just
                one week
            </p>

            <div class="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 sm:space-x-2.5 items-center justify-center">
                <!-- Sign up with Email -->
                <a href="#" class="w-full sm:w-auto">
                    <button type="button"
                        class="flex items-center justify-center px-4 py-3 w-full  shadow-sm font-medium rounded-full border border-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200 transition duration-250 ease-in-out">
                        <span class="text-base">Sign up with Email</span>
                    </button>
                </a>

                <!-- Sign up with Google -->
                <a href="#" class="w-full sm:w-auto sm:mt-0 mt-2 sm:ml-0 ml-2">
                    <button type="button"
                        class="flex items-center justify-center gap-4 px-4 py-3 w-full border border-green-400 shadow-sm font-medium rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200 transition duration-250 ease-in-out">
                        <!-- Google Logo -->
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-0.5 0 48 48" version="1.1">
                            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                    <g id="Google" transform="translate(401.000000, 860.000000)">
                                        <path
                                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                            id="Fill-1" fill="#FBBC05">

                                        </path>
                                        <path
                                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                            id="Fill-2" fill="#EB4335">

                                        </path>
                                        <path
                                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                            id="Fill-3" fill="#34A853">

                                        </path>
                                        <path
                                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                            id="Fill-4" fill="#4285F4">

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="text-base">Sign up with Google</span>
                    </button>
                </a>
            </div>

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

  const otherContainer = element.querySelector("#other-container");
  async function fetchOther(): Promise<void> {
    const products: Product[] = (await getAllProducts()).sort((a, b) => {
      return a.stock - b.stock;
    });
    if (products) {
      products?.slice(10, 22).forEach((product) => {
        const card = productCard(product);
        otherContainer?.appendChild(card);
      });
    }
  }
  fetchOther();
  return element;
}
