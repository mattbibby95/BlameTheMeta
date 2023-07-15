<script setup>
import heroes from '../assets/heroes.json'
import axios from 'axios';
import router from '../router/index'
import { getPlayersByTeam, determineWinrateForHero } from '../helpers/MatchParsingHelpers'

const currentMatchId = router.currentRoute.value.params.matchid
console.log(`currentmatchid ${currentMatchId}`);
console.log(`matchIdInLocalStorage ${localStorage.getItem('currentMatchId')}`);

if (localStorage.getItem('currentMatchId') !== currentMatchId) {
    localStorage.currentMatchId = currentMatchId;
    console.log('calling matches api');
    const match = await axios.get(`https://api.opendota.com/api/matches/${currentMatchId}`);
    localStorage.currentMatchData = JSON.stringify(match.data);
}

if (!localStorage.getItem('allHeroStats')) {
    console.log('calling hero stats api');
    const allHeroStats = await axios.get('https://api.opendota.com/api/heroStats');
    localStorage.allHeroStats = JSON.stringify(allHeroStats.data);
}

const match = JSON.parse(localStorage.getItem('currentMatchData'));
const allHeroStats = JSON.parse(localStorage.getItem('allHeroStats'));
console.log(allHeroStats);

const radiantPlayers = getPlayersByTeam('radiant', match);
const direPlayers = getPlayersByTeam('dire', match);
const amData = determineWinrateForHero(94, allHeroStats);
// const heroesPlayed = matches.data.map(match => heroes.heroes.find(hero => hero.id === match.hero_id))

</script>

<template>
    <div>
        {{ match.players[0] }}
    </div>
</template>