<script setup>
import { playerInfoStore } from '../helpers/playerInfo'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const matches = ref()

onMounted(() => {
  console.log(`the component is now mounted.`)
  axios.get(`https://api.opendota.com/api/players/${playerInfoStore.playerId}/recentMatches`)
  .then(response => (matches.value = response))
})

</script>

<template>
  <div class="about">
    <h1>{{matches}}</h1>
  </div>
</template>

<style>

</style>
