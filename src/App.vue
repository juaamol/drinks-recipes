<script setup>
import { RouterView } from 'vue-router'
import SearchHeader from './components/SearchHeader.vue'
import RecipeModal from './components/RecipeModal.vue'
import AlertNotification from './components/AlertNotification.vue'
</script>

<template>
  <SearchHeader></SearchHeader>
  <main id="main" class="container mx-auto mt-10">
    <RouterView />
  </main>

  <RecipeModal />
  <AlertNotification />
</template>

<style scoped></style>
