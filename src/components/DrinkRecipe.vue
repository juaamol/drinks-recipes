<script setup>
import { defineProps } from 'vue'
import { useDrinksStore } from '../stores/drinks'

defineProps({
  recipe: {
    type: Object
  }
})

const store = useDrinksStore()

const handleGetRecipe = () => {
  store.getRecipe()
}
</script>
<template>
  <div class="border shadow-lg">
    <div class="overflow-hidden">
      <img
        class="hover:scale-125 transition-transform hover:rotate-2"
        :src="recipe.strDrinkThumb"
        :alt="recipe.strDrink"
      />
    </div>
    <div class="p-5">
      <h2 class="text-2xl truncate font-extrabold">
        {{ recipe.strDrink }}
      </h2>
      <button
        type="button"
        class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
        @click="handleGetRecipe"
      >
        Get recipe
      </button>
    </div>
  </div>
</template>
