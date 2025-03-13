<template>
    <app-layout>
        <h1>Teste</h1>
    </app-layout>
</template>
  
  <script>
  import AppLayout from '../components/AppLayout.vue';

  export default {
  components: { AppLayout },
    
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