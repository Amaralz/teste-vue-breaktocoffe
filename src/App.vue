<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navBar.vue'
import sidebar from './components/sideBar.vue';
import login from '@/views/loginView.vue'
</script>

<template>
  <navbar />
  <div class="conteiner">
    <sidebar />
    <RouterView />
  </div>

</template>

<style scoped>
  .conteiner{
    display: flex;
  }
</style>
