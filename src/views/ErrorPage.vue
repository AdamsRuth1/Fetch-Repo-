<template>
  <div class=" items-center mx-auto text-center mt-40">
    <h1 class="text-4xl font-bold">404 Error Page</h1>
    <p class="mt-4">The requested page does not exist.</p>
    <p class="italic">Not Found</p>
    <p class="mt-4">
    <RouterLink to="/"  class="border-sm py-2 px-2 rounded bg-blue-400 text-white mt-20">Go back to home page</RouterLink>
    </p>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style>
/* Add any additional styles here */
</style>
