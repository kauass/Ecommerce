<template>
  <nav class="bg-white shadow p-4 flex justify-end h-14">
      <div class="relative">
        <button @click="toggleDropdown" class="flex items-center space-x-1 focus:outline-none w-20 cursor-pointer">
          <img src="../assets/user.png" alt="User Avatar" class="rounded-full w-8 h-8 ml-8">
    
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Configurações</a>
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sair</a>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  data() {
      return {
        isDropdownOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
    },
  };
</script>
<style>
    
</style>