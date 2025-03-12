<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref, computed } from 'vue';
import store from './store';

const test = computed(() => store.state.test)
</script>

<template>
  <div >
    {{ test }}
    <p class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
  Hello world
  </p>
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
