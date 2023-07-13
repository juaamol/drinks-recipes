<script setup>
import { RouterView } from 'vue-router'
import SearchHeader from './components/SearchHeader.vue'
</script>

<template>
  <SearchHeader></SearchHeader>
  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
</template>

<style scoped></style>
