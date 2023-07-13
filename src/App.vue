<script setup>
import { RouterView } from 'vue-router'
import SearchHeader from './components/SearchHeader.vue'
import RecipeModal from './components/RecipeModal.vue'
</script>

<template>
  <SearchHeader></SearchHeader>
  <main class="container mx-auto mt-10">
    <RouterView />
  </main>

  <RecipeModal />
</template>

<style scoped></style>
