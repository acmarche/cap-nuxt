<script setup>
const links = [
  {name: 'Accueil', url: '/', id: 1},
  {name: 'Commerces', url: '/', id: 2},
  {name: 'Événements', url: '/', id: 3},
  {name: 'À propos', url: '/', id: 4},
  {name: 'Contact', url: '/', id: 5},
  {name: 'Accès membre', url: '/', id: 6},
  {name: 'Devenir membre', url: '/', id: 7},
]
const articles = [
  {name: 'Où se garer à Marche-en-famenne ?', url: '/', id: 1},
  {name: '"Ma ville, mes commerçants" : Campagne de promotion du commerce local !', url: '/', id: 2},
  {name: 'Histoire de goût, une fromagerie pour tous les ... goûts !', url: '/', id: 3},
  {name: 'NOVEWAY, votre partenaire énergétique', url: '/', id: 4}
]
const events = [
  {name: 'Nouveau commerce à vendre à Marche !', url: '/', id: 1},
  {name: 'Découvrez la vidéo Arrêt sur Immo de Julie !', url: '/', id: 2},
  {name: 'Tendances printanières', url: '/', id: 3}
]
</script>

<template>
  <footer class="w-full min-h-[20rem] text-white xl:pb-5 ">
    <div class="bg-grey-dark p-5 pb-20 flex flex-col justify-between xl:grid xl:grid-cols-4">
      <div>
        <h3 class="text-2xl mb-2">Liens</h3>
        <ul class="block ml-4">
          <li v-for="link in links" :key="link.id" class="py-3 lg:py-1">
            <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl mb-2">Posts récents</h3>
        <ul class="block ml-4">
          <li v-for="article in articles" :key="article.id" class="py-3 lg:py-1">
            <NuxtLink :to="article.url">{{ article.name }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl mb-2">Évènements</h3>
        <ul class="block ml-4">
          <li v-for="event in events" :key="event.id" class="py-4">
            <NuxtLink :to="event.url">{{ event.name }}</NuxtLink>
          </li>
        </ul>
        <div class="flex gap-2 items-center ml-4">
          <NuxtLink to="/" class="bg-green-default flex items-end justify-center h-10 w-10">
            <img src="/images/icon-facebook.png" alt="facebook" class="block h-8  object-none">
          </NuxtLink>
          <NuxtLink to="/" class="bg-green-default flex items-end justify-center h-10 w-10">
            <img src="/images/icon-instagram.png" alt="instagram" class="h-8 object-none">
          </NuxtLink>
        </div>
      </div>

      <div class="self-center lg:self-start text-center">
        <h3 class="text-2xl mb-2 font-pathway-semi-bold">Contacter Cap</h3>
        <div class="flex flex-col items-center text-center">
        <span>Amélie Vetcour<br/>
        CAP sur Marche ASBL<br/>
        Avenue de France, 126<br/>
        6900 Marche-en-Famenne<br/>
        <a href="mailto:cap@marche.be">cap@marche.be</a><br/>
        </span>
          <div class="flex gap-2 items-center mt-2">
            <NuxtLink to="https://www.marche.be">
              <img src="/images/logoHome1.png" alt="marche.be" class="h-16">
            </NuxtLink>
            <NuxtLink to="https://adl.marche.be">
              <img src="/images/logoHome2.png" alt="adl" class="h-16">
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <FooterCopyright/>
  </footer>
</template>
