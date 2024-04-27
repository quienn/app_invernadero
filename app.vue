<template>
  <k-app theme="material">
    <NuxtPage />
  </k-app>
</template>

<script setup>
import { kApp } from "konsta/vue";
import "@/assets/globals.css";
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
