<script setup>
import BasicMatchInfo from '../components/BasicMatchInfo.vue'
</script>

<template>
  <div class="about">
    <div class="Explanation">
      Explanation Goes Here
    </div>
    <Suspense>
      <div class="MatchInfoHolder">
      <BasicMatchInfo></BasicMatchInfo>
      </div>
      <template class="MatchInfoHolder" #fallback>
        Getting your matches...
      </template>
    </Suspense>
  </div>
</template>

<style>
.MatchInfoHolder {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 90vh;
  overflow-y: hidden;
}
.Explanation {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
