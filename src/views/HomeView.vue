<script setup>
import PlayerIdBox from '../components/PlayerIdBox.vue'
</script>

<template>
  <main class="mainContent">
    <PlayerIdBox/>
  </main>
</template>

<style scoped>
.mainContent {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

playerIdCentering {
  margin: auto;
}
</style>
