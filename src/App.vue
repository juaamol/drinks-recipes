<script setup>
import { RouterView } from 'vue-router'
import SearchHeader from './components/SearchHeader.vue'
import Modal from './components/Modal.vue'
</script>

<template>
  <SearchHeader></SearchHeader>
  <main class="container mx-auto mt-10">
    <RouterView />
  </main>

  <Modal />
</template>

<style scoped></style>
