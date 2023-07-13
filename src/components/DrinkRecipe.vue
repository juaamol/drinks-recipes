<script setup>
import { defineProps } from 'vue'

defineProps({
  recipe: {
    type: Object
  }
})
</script>
<template>
  <div>
    <h2>{{ recipe.strDrink }}</h2>
  </div>
</template>
