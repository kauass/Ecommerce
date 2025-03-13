<template>

   <div class="min-h-screen flex bg-gray-100">
    <sidebar>
    </sidebar>
    <main class="flex-1">
        <navbar></navbar> 
        <div class="mt-5 ml-5">
          <slot></slot>  
        </div>
    </main>
   </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

export default {
  components: { Sidebar, Navbar },
    name: "AppLayout"
}

</script>
<style>
    
</style>