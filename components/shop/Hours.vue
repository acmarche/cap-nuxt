<script setup>
const shop = {}
const isH = computed(() => shop.hours_type_name && shop.hours_type_id)
const hasHours = computed(() => shop.horaires && shop.horaires.type === Array && shop.horaires.lengt > 0)

const titleHours = computed(function () {
  if (isH === false) return ''
  switch (shop.hours_type_id) {
    case 2 :
      return 'Heures d\'ouverture'
    case 1 :
      return 'Heures de consultations'
    default :
      return 'Heures'
  }
})

const engDayNames = [
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
  <div v-if="shop.hours">
    <span itemprop="legalName" :content="shop.societe"></span>
    <div class="infoPart" id="ankleTime">
      <h2>
        <img src="/images/iconHeure.png" class="" width="29" height="28" alt="Icone catégorie"/>
        {{ titleHours }}
      </h2>
    </div>
  </div>

  <div itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification" itemscope>

    <ul>
      <li v-for="day in shop.hours">
        <p v-if="day.is_open">
          {{ day.name }}
        </p>
        {{ day.morning_start }}
        {{ day.morning_end }}
        {{ day.is_closed_at_lunch }}
        {{ day.noon_start }}
        {{ day.noon_end }}
        <p v-if="day.is_redv">sur RDV</p>
        <p>
          <span>Fermé</span>
        </p>
      </li>
    </ul>

  </div>

  <div class="infoPart" v-if="hasHours">
    <h2>
      <img src="/images/iconHeure.png" class="noBackgroundForThis" width="29" height="28"
           alt="Icone catégorie"/>Heures d’ouverture
    </h2>

    <?php echo getHorrairesMeta($commerce["horaires"]); ?>

    <div itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification" itemscope>

    </div>

  </div>

  <div class="infoPart" v-if="shop.comment3">
    <h2>
      <img src="/images/iconHeure.png" class="noBackgroundForThis" width="29" height="28"
           alt="Icone catégorie"/>
      Heures d’ouverture
    </h2>
    <p>
      {{ shop.comment3 }}
    </p>

  </div>

</template>