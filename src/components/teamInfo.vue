<script setup>
import playerInfo from './playerInfo.vue';
const props = defineProps(['teamInfo', 'allHeroStats', 'teamName', 'teamWinrates', 'teamOverallWin', 'winner', 'enemyWinRate'])
const winner = (props.teamName === 'Radiant' && props.winner) || (props.teamName === 'Dire' && !props.winner) 
const winLossColour = winner ? '#D59843' : '#b04e53'
const higherWinrate = props.teamOverallWin > props.enemyWinRate
const winRateColour = higherWinrate ? '#D59843' : '#b04e53'

</script>

<template>
    <h1 class="TeamCard" :style="{backgroundColor: '#1f2f3c'}">{{ teamName }}</h1>
    <div :style="{backgroundColor: winLossColour}" class="WinLossCard">
        <h1 v-if="winner">Victory</h1>
        <h1 v-else>Defeat</h1>
    </div>
    <div :style="{backgroundColor: winRateColour}" class="WinrateCard">
        <h2>The {{ teamName }} overall winrate is: {{ teamOverallWin.toFixed(2) }}</h2>
    </div>
    <div class="PlayerCard" v-for="(player, index) in teamInfo">
        <playerInfo :playerInfo="player" :playerWinrate="teamWinrates[index]"></playerInfo>
    </div>
</template>

<style scoped>
.PlayerCard{
    display: flex;
    flex-direction: row;
    height: 140px;
    align-items: center;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    background-color: #f3f5f1;
    margin: 20px;
    width: 95%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    min-width: 690px;
}

@media (min-width: 900px) { 
    .PlayerCard {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    background-color: #F3F5F1;
    margin: 10px;
    padding: 10px;
    display: flex;
    height: 120px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    width: 95%;
    min-width: 690px;
    }
}
.WinrateCard{
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    background-color: #F3F5F1;
    margin: 10px;
    width: 400px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F3F5F1;
}
.WinLossCard{
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    color: #F3F5F1;
    width: 400px;
    height: 90px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.TeamCard{
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    color: #F3F5F1;
    width: 95%;
    height: 100px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>