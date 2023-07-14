<script setup>
import { useFavoritesStore } from '../stores/favorites'
import DrinkRecipe from '../components/DrinkRecipe.vue'

const favorites = useFavoritesStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favorites</h1>
  <p v-if="favorites.recipes.length === 0" class="my-10 text-center text-2xl">
    There are no favorites
  </p>
  <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-10">
    <DrinkRecipe :recipe="recipe" v-for="recipe in favorites.recipes" :key="recipe.idDrink" />
  </div>
</template>

<style scoped></style>
