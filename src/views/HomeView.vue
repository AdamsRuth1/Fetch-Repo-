<template>
  <div class="bg-white-400 py-2 shadow">
    
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
            <a href="#" class="text-blue-600 hover:bg-white hover:text-customButton hover:border-customButton hover:rounded-full px-4 py-2 border-2 border-transparent transition-all duration-300">My Repos</a>
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
    <div class="bg-black text-white items-center flex ">
      <img :src="Ruth" alt="Ruth Logo" class=" rounded-xl h-40 mx-4" />
      <h1>As an enthusiastic software engineer, I am committed to ongoing learning and practical application to refine my expertise in frontend development. ilove coding</h1>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import logo from '../assets/RuthLogo1.png';
import Ruth from '../assets/ruth.jpeg';


const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
