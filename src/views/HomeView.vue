<script setup>
import DrinkRecipe from '../components/DrinkRecipe.vue'
import { useDrinksStore } from '../stores/drinks'

const store = useDrinksStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recipes</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-10">
    <DrinkRecipe :recipe="recipe" v-for="recipe in store.recipes" :key="recipe.idDrink" />
  </div>
</template>

<style scoped></style>
