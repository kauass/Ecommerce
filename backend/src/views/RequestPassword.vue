<template>
    <GuestLayout title="Sign in to your account">
             <form class="space-y-6" action="#" method="POST">
                 <div>
                     <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                     <div class="mt-2">
                         <input type="email" name="email" id="email" autocomplete="email" required 
                             class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm">
                     </div>
                 </div>
 
                 <div>
                     <button type="submit" 
                         class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                         Sign in
                     </button>
                 </div>
             </form>
     </GuestLayout>
 </template>
 
 <script setup>
 import GuestLayout from "../components/GuestLayout.vue";
 </script>
 
 <style scoped>
 </style>
 