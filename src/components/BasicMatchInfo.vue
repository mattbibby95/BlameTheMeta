<script setup>
import { playerInfoStore } from '../helpers/playerInfo';
import heroes from '../assets/heroes.json'
import axios from 'axios';

const playerId = localStorage.getItem('playerId');

const matches = await axios.get(`https://api.opendota.com/api/players/${playerId}/recentMatches`)
const heroesPlayed = matches.data.map(match => heroes.heroes.find(hero => hero.id === match.hero_id))

function winOrLose(index) {
    const matchToCheck = matches.data[index]
    const playerIsOnRadiant = matchToCheck.player_slot < 128;
    const radiantWins = matchToCheck.radiant_win === true;
    if(playerIsOnRadiant && radiantWins){
        return `<span class='Victory'>Victory</span>`
    }
    if (!playerIsOnRadiant && !radiantWins){
        return `<span class='Victory'>Victory</span>`
    }
    return `<span class='Defeat'>Defeat</span>`
}


</script>

<template>
    <div class="BasicMatchCard" v-for="(match, index) in matches.data">
        <img v-bind:src="'https://cdn.cloudflare.steamstatic.com' + heroesPlayed[index].img" width="256" height="144"/>
        <div class="InfoSection">
            <h1>
                Hero Played
            </h1>
            <h2>
                {{heroesPlayed[index].localized_name}}
            </h2>
        </div>
        <div class="InfoSection">
            <h1>
                Match Outcome
            </h1>
            <h2 v-html="winOrLose(index)">
            </h2>
        </div>
        <div class="InfoSection">
            <h1>
                KDA
            </h1>
            <h2>
                {{ match.kills }} / {{ match.deaths }} / {{ match.assists }}
            </h2>
        </div>
    </div>
</template>


<style scoped>
.BasicMatchCard {
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  background-color: #F3F5F1;
  margin: 20px;
  padding: 10px;
  display: flex;
  width: 40%;
  min-width: 1000px;
  display: flex;
  justify-content: space-around;
}

.InfoSection {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

img {
    margin-top: auto;
    margin-bottom: auto;
}

.InfoSection h2 {
    margin-bottom: 20px;
}
</style>