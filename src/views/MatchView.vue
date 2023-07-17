<script setup>
import BasicMatchInfo from '../components/BasicMatchInfo.vue'
</script>

<template>
  <div class="MatchOverviewContainer">
    <div class="ExplanationBar">
      <div class="ExplanationContent">
        <h2>Matches Overview</h2>
        <p class="ExplanationWaffle">
          These are the last 20 matches you played, click on a match to check your team's win percentages against that of the enemy. See if
          you should have won, or if it was truly out of your control.
        </p>
      </div>
    </div>
    <Suspense>
      <div class="MatchInfoHolder">
      <BasicMatchInfo></BasicMatchInfo>
      </div>
      <template #fallback>
        <div class="TemplateHolder">
          <p>Getting your matches...</p>
          <div class="loader"></div>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style>

.MatchOverviewContainer {
    width: 98vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 1fr;
  }
  .MatchInfoHolder {
    grid-row-start: 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-column-start: 1;
    grid-column-end: 3;
    max-width: 100%;
    justify-items: center;
  }

 @media (min-width: 900px) { 
    .MatchOverviewContainer {
    width: 98vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 1fr;
  }
  .MatchInfoHolder {
    grid-row-start: 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-column-start: 1;
    grid-column-end: 3;
    max-width: 100%;
    justify-items: center;
  }
 }

@media (min-width: 1500px) {
    .MatchOverviewContainer {
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.1fr 1fr;
  }

  .MatchInfoHolder {
    grid-row-start: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-auto-flow: row;
    grid-column-start: 1;
    grid-column-end: 3;
    max-width: 100%;
    justify-items: center;
  }
}

.ExplanationBar {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 3;
}
.ExplanationContent {
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  width: 900px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2f3c;
  color: #F3F5F1;
  flex-direction: column;
  margin: 20px;
}

.ExplanationWaffle{
  width: 75%;
}

.TemplateHolder {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 75vh;
  flex-direction: column;
}

.TemplateHolder p {
  margin: 50px;
}

.loader {
  color: #1f2f3c;
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  animation: mulShdSpin 1.3s infinite linear;
  transform: translateZ(0);
}

@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 
    2em -2em 0 0em, 3em 0 0 -1em, 
    2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 
    3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 
    2em -2em 0 0, 3em 0 0 0.2em, 
    2em 2em 0 0, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, 
     -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, 
     -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, 
     -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 
    3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 
    3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
  
</style>
