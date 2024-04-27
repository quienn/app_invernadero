<template>
  <k-page>
    <k-navbar
      title="Invernaderos"
      :subtitle="`Ajustes para ${sensor?.data.location}`"
    >
      <template #left>
        <k-navbar-back-link text="Atrás" @click="$router.back()" />
      </template>
    </k-navbar>

    <k-block-title>Información</k-block-title>
    <k-list strong outline>
      <k-list-item title="Ubicación" :after="sensor?.data.location" />
      <k-list-item
        title="Temperatura"
        :after="`${sensor?.data.temperature} °C`"
      />
      <k-list-item
        title="Humedad del Ambiente"
        :after="`${sensor?.data.humidity} %`"
      />
      <k-list-item
        title="Humedad del Suelo"
        :after="`${sensor?.data.moisture} %`"
      />
      <k-list-item
        title="Última vez regado"
        :after="sensor?.data.wateredAt?.toLocaleString('es-MX') ?? 'Nunca'"
      />
    </k-list>

    <k-block-title>Ajustes</k-block-title>
    <k-list inset>
      <k-list-item label title="Regado automático">
        <template #after>
          <k-toggle
            :checked="shouldWater"
            @change="() => (shouldWater = !shouldWater)"
          />
        </template>
      </k-list-item>
    </k-list>
  </k-page>
</template>

<script setup lang="ts">
import {
  kNavbar,
  kPage,
  kNavbarBackLink,
  kBlockTitle,
  kListButton,
  kToggle,
  kList,
  kListItem,
} from "konsta/vue";

import type { Greenhouse } from "@prisma/client";

const route = useRoute();
const { id } = route.params;

const { data: sensor } = useFetch<{
  data: Greenhouse;
}>(`/api/greenhouses/${id}`);

const shouldWater = ref(sensor.value?.data.shouldAutoWater);

watch(shouldWater, async (value) => {
  await $fetch(`/api/greenhouses/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      shouldAutoWater: value,
    }),
  });
});
</script>
