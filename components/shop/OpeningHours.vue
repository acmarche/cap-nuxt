<script setup lang="ts">
const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()
const isH = computed(() => shop.cap.hoursTypeName && shop.cap.hoursTypeId)
const hasHours = computed(() => shop.horaires && shop.horaires.type === Array && shop.horaires.length > 0)

//select * from commercio_commercant_hours where commercio_commercant_id = 69
function displayClosedAtLunch(day: object): boolean {
  if (day.morning_start_short && day.morning_end_short) {
    return false
  }
  return day.isClosedAtLunch
}

const titleHours = computed(function () {
  if (isH.value === false) return ''
  switch (shop.cap.hoursType.id) {
    case 2 :
      return 'Heures d\'ouverture'
    case 1 :
      return 'Heures de consultations'
    default :
      return 'Heures d\'ouverture'
  }
})

const daysName = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]
</script>
<template>

  <h2 class="flex flex-row gap-2 mt-2">
    <img src="/images/iconHeure.png" class=" " width="29" height="28"
         alt="Icone catégorie">
    <span class="uppercase">{{ titleHours }}</span>
  </h2>

  <div v-if="shop.cap.hours.length > 0" itemprop="openingHoursSpecification"
       itemtype="http://schema.org/OpeningHoursSpecification" itemscope>

    <ul class="">
      <li v-for="day in shop.cap.hours" :key="day.id" class="flex justify-between w-full">
        <div class="font-extrabold">
          {{ daysName[day.day] }}
        </div>
        <div>
          {{ day.morning_start_short ?? day.morning_start_short }} -
          {{ day.morning_end_short ?? day.morning_end_short }}
          <span v-if="displayClosedAtLunch(day)">Fermé à midi </span>
          |
          {{ day.noon_start_short ?? day.noon_start_short }} -
          {{ day.noon_end_short ?? day.noon_end_short }}
          <span v-if="day.isRdv">sur RDV</span>
        </div>
      </li>
    </ul>

  </div>

  <div class="" v-if="hasHours">
    <h2>
      <img src="/images/iconHeure.png" class="" width="29" height="28"
           alt="Icone catégorie"/>Heures d’ouverture
    </h2>

    <div itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification" itemscope>

    </div>

  </div>

  <div class="" v-if="shop.comment3">
    <h2>
      <img src="/images/iconHeure.png" class="" width="29" height="28"
           alt="Icone catégorie"/>
      Heures d’ouverture via commnentaire
    </h2>
    <p v-text="shop.comment3"></p>

  </div>

</template>