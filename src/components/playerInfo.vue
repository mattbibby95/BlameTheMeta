<script setup>
import heroes from '../assets/heroes.json'

const props = defineProps(['playerInfo', 'playerWinrate'])
console.log(props.playerInfo.personaname);

const heroImg = heroes.heroes.find(hero => hero.id === props.playerInfo.hero_id).img
</script>

<template>
    <img class="PlayerImageSection" v-bind:src="'https://cdn.cloudflare.steamstatic.com' + heroImg" width="96" height="54"/>
    <h3 class="PlayerInfoSection" v-if="!playerInfo.personaname">Mysterious Stranger</h3>
    <h3 class="PlayerInfoSection" v-else>{{ playerInfo.personaname }}</h3>
    <div class="PlayerInfoSection">
        <h3>KDA</h3>
        <p>{{ playerInfo.kills }} - {{ playerInfo.deaths }} - {{ playerInfo.assists }}</p>
    </div>
    <div class="PlayerInfoSection">
        <h3>Damage</h3>
        <p>{{ playerInfo.hero_damage }}</p>
    </div>
    <div class="PlayerInfoSection">
        <h3>Gold</h3>
        <p>{{ playerInfo.gold + playerInfo.gold_spent }}</p>
    </div>
    <div class="PlayerInfoSection">
        <h3>Win %</h3>
        <p>{{ playerWinrate.toFixed(2) }}</p>
    </div>
</template>

<style>
.PlayerInfoSection {
    margin: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100px;
    justify-content: center;
    align-items: center;
    max-width: 80px;
}
.PlayerImageSection {
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
}
</style>