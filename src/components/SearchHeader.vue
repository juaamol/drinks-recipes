<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isHomePage = computed(() => route.name === 'home')
</script>

<template>
  <header class="bg-slate-800" :class="{ header: isHomePage }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'home' }">
            <img class="w-32" src="/img/logo.svg" alt="Logo" />
          </RouterLink>
        </div>
        <nav class="flex gap-4">
          <RouterLink
            class="text-white uppercase font-bold"
            :to="{ name: 'home' }"
            active-class="text-orange-500"
          >
            Home
          </RouterLink>
          <RouterLink
            class="text-white uppercase font-bold"
            :to="{ name: 'favorites' }"
            active-class="text-orange-500"
          >
            Favorites
          </RouterLink>
        </nav>
      </div>
      <form
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
        v-if="isHomePage"
      >
        <div class="space-y-4">
          <label for="ingredient" class="block text-white uppercase font-extrabold text-lg">
            Name or Ingredients
          </label>
          <input
            id="ingredient"
            type="text"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Name or Ingredient. (Vodka, Tequila, ...)"
          />
        </div>
        <div class="space-y-4">
          <label for="category" class="block text-white uppercase font-extrabold text-lg">
            Category
          </label>
          <select id="category" class="p-3 w-full rounded-lg focus:outline-none">
            <option value="">-- Choose --</option>
          </select>
        </div>
        <input
          type="submit"
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
          value="Search recipes"
        />
      </form>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-image: url('/img/bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>
