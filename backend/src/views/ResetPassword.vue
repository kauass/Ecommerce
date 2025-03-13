<template>
    <GuestLayout title="Set new password">
        <form class="space-y-6" action="#" method="POST">
            <div>
                <label for="new-password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="mt-2">
                    <input 
                        type="password" 
                        name="password" 
                        id="new-password" 
                        autocomplete="new-password" 
                        required 
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm">
                </div>
            </div>

            <div>
                <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-900">Repeat Password</label>
                <div class="mt-2">
                    <input 
                        type="password" 
                        name="password_confirmation" 
                        id="confirm-password" 
                        autocomplete="new-password" 
                        required 
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm">
                </div>
            </div>


            <div>
                <button type="submit" 
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Reset Password
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
 