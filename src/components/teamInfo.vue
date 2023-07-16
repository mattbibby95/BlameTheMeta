<script setup>
import playerInfo from './playerInfo.vue';
const props = defineProps(['teamInfo', 'allHeroStats', 'teamName', 'teamWinrates', 'teamOverallWin'])

</script>

<template>
    <h1>{{ teamName }}</h1>
    <div class="WinrateCard">
        <h2>The {{ teamName }} overall winrate is: {{ teamOverallWin }}</h2>
    </div>
    <div class="PlayerCard" v-for="player in teamInfo">
        <playerInfo :playerInfo="player"></playerInfo>
    </div>
</template>

<style scoped>
.PlayerCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    background-color: #F3F5F1;
    margin: 20px;
}
.WinrateCard{
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    background-color: #F3F5F1;
    margin: 20px;
}
</style>