<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import {LIcon, LMap, LMarker, LTileLayer, LTooltip} from "@vue-leaflet/vue-leaflet";

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()

const coordinates = ref([shop.latitude, shop.longitude])
const zoom = ref(15);
const map = ref(null);
const iconUrl = computed(() => {
  return `/images/customMarker.png`;
})
const iconSize = computed(() => {
  return [80, 120];
})
const init = () => {
  console.log('Leaflet map initialized')
};
</script>
<template>
  <section class="h-96 w-full">
    <l-map ref="map" v-model:zoom="zoom" :center="coordinates" :use-global-leaflet="false" @ready="init">
      <l-tile-layer
          ref="tileLayer"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      />
      <l-marker :lat-lng="coordinates">
        <l-icon :icon-url="iconUrl" :icon-size="iconSize"/>
        <l-tooltip>
          {{ shop.societe }}
        </l-tooltip>
      </l-marker>
    </l-map>
  </section>
</template>