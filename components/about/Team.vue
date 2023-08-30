<script setup>
const team = [
  {
    name: 'Maureen Pieters',
    function: 'Responsable dynamisation commerce',
    image: 'maureen.jpg',
    id: 1
  },
  {name: 'Geoffrey MARINNE', function: 'Président', image: 'GeoffreyMARINNE.jpg', id: 2},
  {name: 'Vincent PIRART', function: 'Vice-Président', image: 'VincentPIRART.jpg', id: 3},
  {name: 'Kevin DEFEVER', function: 'Secrétaire', image: 'KevinDEFEVER.jpg', id: 4},
  {name: 'Julien LECROMBS', function: 'Trésorier', image: 'JulienLECROMBS.jpg', id: 5},
]
</script>
<template>
  <section class="mx-auto max-w-7xl px-6 text-center lg:px-8">
    <div class="mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Rencontrez notre équipe
      </h2>
      <p class="mt-4 text-lg leading-8 text-gray-600 space-x-4">
        <a href="tel:+32470016963">0470 / 01 69 63</a>
        <a href="mailto:maureen.cap@marche.be">Envoyer un e-mail</a>
      </p>
    </div>
    <ul role="list"
        class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <li v-for="member in team" :key="member.id">
        <img class="mx-auto h-56 w-56 rounded-full"
             :src="`/images/${member.image}`"
             alt="">
        <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
          {{ member.name }}
        </h3>
        <p class="text-sm leading-6 text-gray-600">{{ member.function }}</p>
      </li>
    </ul>
  </section>
</template>