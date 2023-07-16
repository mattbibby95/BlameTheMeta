<script setup>
import heroes from '../assets/heroes.json'
import axios from 'axios';
import router from '../router/index'
import { getPlayersByTeam, determineWinrateForHero } from '../helpers/MatchParsingHelpers'
import teamInfo from '../components/teamInfo.vue';

const currentMatchId = router.currentRoute.value.params.matchid

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

const radiantPlayers = getPlayersByTeam('radiant', match);
const direPlayers = getPlayersByTeam('dire', match);

const radiantWinrates = []
const direWinrates = []

radiantPlayers.forEach((player) => {
    radiantWinrates.push(determineWinrateForHero(player.hero_id, allHeroStats))
})

direPlayers.forEach((player) => {
    direWinrates.push(determineWinrateForHero(player.hero_id, allHeroStats))
})

console.log(radiantWinrates)
const radiantTotalWinrate = radiantWinrates.reduce((accumulator, winrate) => accumulator + winrate, 0)
console.log(radiantTotalWinrate)
console.log(direWinrates)
const direTotalWinrate = direWinrates.reduce((accumulator, winrate) => accumulator + winrate, 0)
console.log(direTotalWinrate)


</script>

<template>
    <div class="AdvancedMatchViewContainer">
        <div class="TeamContainer">
            <teamInfo :teamInfo="radiantPlayers" :allHeroStats="allHeroStats" :teamWinrates="radiantWinrates" :teamOverallWin="radiantTotalWinrate" teamName="Radiant"></teamInfo>
        </div>
        <div class="TeamContainer">
            <teamInfo :teamInfo="direPlayers" :allHeroStats="allHeroStats" :teamWinrates="direWinrates" :teamOverallWin="direTotalWinrate" teamName="Dire"></teamInfo>
        </div>
    </div>
</template>

<style scoped>
.AdvancedMatchViewContainer {
    display: flex;
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: space-evenly;
}
.TeamContainer{
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70%;
}
</style>