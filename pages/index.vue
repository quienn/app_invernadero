<template>
  <k-page>
    <k-navbar title="Invernaderos" />

    <k-preloader v-if="pending" />
    <greenhouse-card
      v-if="sensors"
      v-for="sensor in sensors"
      :sensor="sensor"
      :key="sensor.id"
    />

    <k-fab class="fixed right-4-safe bottom-4-safe z-20">
      <template #icon>
        <f7-plus />
      </template>
    </k-fab>
  </k-page>
</template>

<script setup lang="ts">
import { kNavbar, kPreloader, kFab, useTheme } from "konsta/vue";

import { Plus as F7Plus } from "framework7-icons/vue";

const theme = useTheme();

import type { Greenhouse } from "@prisma/client";

const {
  execute,
  pending,
  data: fetchedSensors,
} = useFetch<{
  data: Greenhouse[];
}>("/api/greenhouses", {
  retryDelay: 5000,
  method: "GET",
});
useInterval(execute, 5 * 1000);

const sensors = computed(() => fetchedSensors.value?.data ?? []);
</script>
