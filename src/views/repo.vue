<template>
    <div class="flex flex-col justify-center align-middle w-full mr-10 p-4 mt-6 bg-gray-900">
      <h1 class="text-2xl font-semibold text-white mb-4">My GitHub Repositories</h1>
      <input type="text" v-model="searchQuery" placeholder="Search repositories..." class="border p-2 mb-4">
  
      <div v-if="loading" class="text-white">Loading...</div>
      <div v-else>
        <div v-for="repo in paginatedRepositories" :key="repo.id" class="bg-gray-600 text-white rounded p-4 mb-4 py-6">
          <h2 class="text-xl font-semibold mb-4 ">{{ repo.name }}</h2>
          <p class="rounded-xl border mb-4 text-black py-2 px-2">{{ repo.description }}</p>
          <a :href="repo.html_url" class="text-blue-600 font-bold border rounded-xl py-2 px-2 bg-white hover:underline" target="_blank">View on GitHub</a>
          <a v-if="repo.homepage" :href="repo.homepage" class="ml-2 rounded-xl py-2 px-2 bg-white mt-2 border-2 font-bold text-blue-600 hover:underline" target="_blank">Website</a>
        </div>
        <nav>
          <ul class="flex justify-center space-x-2 text-white">
            <li v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ 'bg-blue-500 text-white': currentPage === page }" class="cursor-pointer rounded-full w-8 h-8 flex items-center justify-center">{{ page }}</li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'App',
    data() {
      return {
        repositories: [],
        loading: true,
        currentPage: 3,
        perPage: 4, 
        searchQuery: '',
      };
    },
    computed: {
      filteredRepositories() {
        return this.repositories.filter(repo => {
          return repo.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      },
      paginatedRepositories() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.filteredRepositories.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.filteredRepositories.length / this.perPage);
      },
    },
    methods: {
      async fetchRepositories() {
        try {
          const response = await axios.get('https://api.github.com/users/AdamsRuth1/repos');
          this.repositories = response.data;
          this.loading = false;
        } catch (error) {
          console.error('Error fetching repositories:', error);
        }
      },
      changePage(page) {
        this.currentPage = page;
      },
    },
    mounted() {
      this.fetchRepositories();
    },
  };
  </script>
  
  <style>
  /* Add your Tailwind CSS styles here */
  </style>
  