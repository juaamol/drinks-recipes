<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useDrinksStore } from '../stores/drinks'
import { useNotificationsStore } from '../stores/notifications'

const route = useRoute()
const isHomePage = computed(() => route.name === 'home')
const store = useDrinksStore()
const notifications = useNotificationsStore()

const handleSubmit = () => {
  const hasOneFieldFilled = Object.values(store.search).some((value) => value)

  if (!hasOneFieldFilled) {
    notifications.$patch({
      text: 'Fill at least 1 field',
      isShown: true,
      hasError: true
    })
  } else {
    store.getRecipes()
  }
}
</script>

<template>
  <header class="bg-slate-800" :class="{ header: isHomePage }">
    <div class="mx-auto container px-5 py-12">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'home' }">
            <img class="w-32" src="/img/logo.svg" alt="Logo" />
          </RouterLink>
        </div>
        <nav class="flex gap-4 text-white">
          <RouterLink
            class="uppercase font-bold"
            :to="{ name: 'home' }"
            active-class="text-orange-500"
          >
            Home
          </RouterLink>
          <RouterLink
            class="uppercase font-bold"
            :to="{ name: 'favorites' }"
            active-class="text-orange-500"
          >
            Favorites
          </RouterLink>
        </nav>
      </div>
      <form
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
        @submit.prevent="handleSubmit"
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
            :value="store.search.name"
            @input="(e) => store.searchByName(e.target.value)"
          />
        </div>
        <div class="space-y-4">
          <label for="category" class="block text-white uppercase font-extrabold text-lg">
            Category
          </label>
          <select
            id="category"
            class="p-3 w-full rounded-lg focus:outline-none"
            :value="store.search.category"
            @change="(e) => store.searchByCategory(e.target.value)"
          >
            <option value="">-- Choose --</option>
            <option v-for="category in store.categories" :key="category" :value="category">
              {{ category }}
            </option>
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
