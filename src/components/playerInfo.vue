<script setup>
import heroes from '../assets/heroes.json'

const props = defineProps(['playerInfo'])
console.log(props.playerInfo.personaname);

const heroImg = heroes.heroes.find(hero => hero.id === props.playerInfo.hero_id).img
</script>

<template>
    <div v-if="!playerInfo.personaname">
        <h1>Mysterious Stranger</h1>
    </div>
    <h1>{{ playerInfo.personaname }}</h1>
    <img v-bind:src="'https://cdn.cloudflare.steamstatic.com' + heroImg" width="96" height="54"/>
</template>