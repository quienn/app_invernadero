<template>
  <k-card outline header-divider footer-divider>
    <template #header>
      <h1>
        <b>{{ sensor.location }}</b>
      </h1>
      <p>
        Último cambio registrado:
        {{ sensor.updatedAt }}
      </p>
    </template>

    <k-block-title>Resumen:</k-block-title>
    <k-block class="grid grid-cols-3 h-25 gap-1 text-center content-center">
      <k-chip class="m-0.5 h-auto text-balance"
        >☁️ Temperatura: {{ sensor.temperature }} °C</k-chip
      >
      <k-chip
        class="m-0.5 h-auto text-balance"
        :colors="{
          fillBgMaterial: 'bg-blue-500',
          fillTextMaterial: 'text-white',
        }"
        >💧 Humedad del Ambiente: {{ sensor.humidity }} %</k-chip
      >
      <k-chip
        class="m-0.5 h-auto text-balance"
        :colors="{
          fillBgMaterial: 'bg-green-500',
          fillTextMaterial: 'text-white',
        }"
        >🌱 Humedad del Suelo: {{ sensor.moisture }} %</k-chip
      >
    </k-block>

    <p>
      <b>Última vez regado:</b>
      {{ sensor.wateredAt ?? "Nunca" }}
    </p>

    <template #footer>
      <k-list dividers inset>
        <k-list-button @click="$router.push(`/greenhouses/${sensor.id}`)">
          Ajustes</k-list-button
        >
      </k-list>
    </template>
  </k-card>
</template>

<script setup lang="ts">
import type { Greenhouse } from "@prisma/client";
import {
  kCard,
  kBlock,
  kChip,
  kBlockTitle,
  kList,
  kListButton,
} from "konsta/vue";

defineProps<{
  sensor: Greenhouse;
}>();
</script>
