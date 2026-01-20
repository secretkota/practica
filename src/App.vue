<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header/Header.vue'
import Sidebar from './components/Header/sidebar.vue';
</script>

<template>
  <Header />
  <Sidebar />
  <div class="p-2 sm:ml-50 mt-14">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped></style>
