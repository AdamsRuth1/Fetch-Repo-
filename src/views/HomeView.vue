<template>
  <div class="bg-darkblue py-2 shadow">
    
      <div class="flex items-center justify-between shadow-md py-2">
        <div class="flex">
          <img :src="logo" alt="ExpressWash Logo" class="h-16 mx-4" />
        </div>
        <div class="md:hidden border border-black-500 px-2 py-1 rounded">
          <button @click="toggleMenu">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden md:flex space-x-4">
          <li>
            <a href="#" class="text-darkblue hover:bg-white hover:text-customButton hover:border-customButton hover:rounded-full px-4 py-2 border-2 border-transparent transition-all duration-300">My Repos</a>
          </li>
          <li>
            <RouterLink to="/error" class="text-black hover:bg-white hover:text-customButton hover:border-customButton hover:rounded-full px-4 py-2 border-2 border-transparent transition-all duration-300">404</RouterLink>
          </li>
        </ul>
        
      </div>
    </div>

    <!-- mobile display -->
    <ul v-if="isOpen" class="flex-col md:hidden shadow p-20">
      <li class="text-black hover:text-white hover:bg-blue-400 hover:rounded-full px-3 py-3 mb-20 border border-transparent transition-all duration-300">    <RouterLink to="/">My Repos</RouterLink>
</li>
      <li class="text-black hover:text-white hover:bg-blue-400 hover:rounded-full px-3 py-3 border border-transparent transition-all duration-300">    <RouterLink to="/error">404</RouterLink>
</li>
    
    </ul>
  
    <div class="bg-gray-900 text-white py-20">
      <h1 class="text-4xl text-center">As an enthusiastic software engineer, I am committed to ongoing learning and practical application to refine my expertise in frontend development.</h1>
<p class="text-center mt-20">Explore my recent project details by browsing through my GitHub repositories.</p>
<form class="max-w-md mx-auto mt-4">   

    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import logo from '../assets/RuthLogo1.png';


const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
