<script setup>
import BasicMatchInfo from '../components/BasicMatchInfo.vue'
</script>

<template>
  <div class="about">
    <Suspense>
      <div class="MatchInfoHolder">
      <BasicMatchInfo></BasicMatchInfo>
      </div>
      <template #fallback>
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
}
</style>
