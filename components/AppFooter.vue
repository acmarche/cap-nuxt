<script setup>
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
    <footer
            class="w-full min-h-[20rem] flex flex-col justify-between border-green-default bg-grey-dark p-5 pb-20 text-white xl:grid xl:grid-cols-4 xl:pb-5"
    >

        <div>
            <h3 class="text-2xl mb-2">Liens</h3>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Commerces</a></li>
                <li><a href="#">Événements</a></li>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Accès membre</a></li>
                <li><a href="#">Devenir membre</a></li>
            </ul>
        </div>

        <div>
            <h3 class="text-2xl mb-2">Posts récents</h3>
            <ul>
                <li v-for="article in articles" :key="article.id">
                    <a :href="article.url">{{ article.name }}</a>
                </li>
            </ul>
        </div>

        <div>
            <h3 class="text-2xl mb-2">Evenements</h3>
            <ul>
                <li v-for="event in events" :key="event.id">
                    <a :href="event.url">{{ event.name }}</a>
                </li>
            </ul>
            <div class="flex gap-2 items-center">
                <a href="/">
                    <img src="assets/src/resources/icon-facebook.png" alt="facebook">
                </a>
                <a href="/">
                    <img src="assets/src/resources/icon-instagram.png" alt="instagram">
                </a>
            </div>
        </div>

        <div>
            <h3 class="text-2xl mb-2">Contacter Cap</h3>
            Amélie Vetcour<br/>
            CAP sur Marche ASBL<br/>
            Avenue de France, 126<br/>
            6900 Marche-en-Famenne<br/>
            <a href="mailto:cap@marche.be">cap@marche.be</a><br/>
            <div class="flex gap-2 items-center">
                <a href="/">
                    <img src="assets/src/resources/logoHome1.png" alt="marche.be" class="h-16">
                </a>
                <a href="/">
                    <img src="assets/src/resources/logoHome2.png" alt="adl" class="h-16">
                </a>
            </div>
        </div>
    </footer>
</template>
