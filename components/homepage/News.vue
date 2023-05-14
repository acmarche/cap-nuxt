<script setup>
const news = [
    {
        name: 'DÉCOUVERTE DU NUAGE DU MOIS',
        img: 'https://cap.marche.be/media/nuages-manina.jpg',
        excerpt: 'Depuis le début de cette année, chaque mois, nous vous proposons un nuage chocolaté éphémère.',
        date: 'Du 12 Mai 2023 au 26 Mai 2023',
        url: '/',
        id: 1
    },
    {
        name: 'DÉCOUVREZ LA VIDÉO "ARRÊT SUR IMMO" DE JULIE !',
        img: 'https://cap.marche.be/media/capture-decran-2023-04-26-a-11.png',
        excerpt: 'Julie Vande Lanoitte, votre conseillère en immobilier sur la zone de Marche.',
        date: 'Du 1 Mai 2023 au 15 Mai 2023',
        url: '/',
        id: 2
    },
    {
        name: 'TENDANCES PRINTANIÈRES',
        img: 'https://cap.marche.be/media/2023-04-18-tendance-printaniere-cap-sur-marche-copie.jpg',
        excerpt: 'Le printemps est là et cest le moment idéal pour réinventer votre cuisine !',
        date: 'Le 31 Mai 2023',
        url: '/',
        id: 3
    },
]
</script>
<template>
    <section class="w-full mt-12 bg-geometric bg-no-repeat bg-bottom-left">
        <div class="w-2/3 mx-auto">
            <h2 class="text-2xl font-pathway-bold text-blue-default mb-3">L'ACTU DES COMMERCANTS</h2>
            <ul class="grid grid-cols-3 gap-2">
                <li v-for="item in news" :key="item.id" class="h-80">
                    <a :href="item.url" class="block h-full w-full">
                        <div class="flex flex-col min-h-80">
                            <img :src="item.img" alt="img" class="h-48 w-auto object-cover">
                            <div class="flex flex-row gap-2 pt-2 bg-grey-light">
                                <img src="https://cap.marche.be/media/portrait-1.JPG" alt="team"
                                     class="rounded-full h-6 w-6">
                                <div class="flex flex-col text-blue-default h-44">
                                    <span>{{ item.date }}</span>
                                    <h4 class="font-pathway-semi-bold text-lg">{{ item.name }}</h4>
                                    <span>{{ item.excerpt }}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<style>
a:hover {
    box-shadow: 0px 0px 42px 3px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 0px 42px 3px rgba(0, 0, 0, 0.2);
}
</style>