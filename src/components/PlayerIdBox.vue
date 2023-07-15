<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { playerInfoStore } from '../helpers/playerInfo'
import { RouterLink } from 'vue-router'

// state
const flavourText = ref('choked')
const interval = ref()
const flavourTextOptions = ref(['choked', 'owned', 'beat the meta', 'had an unwinnable one', 'had a free game', 'beat the odds', 'proved the meta'])
const playerId = ref()

function savePlayerIdToLocalStorage() {
  localStorage.playerId = playerInfoStore.playerId
}

watch(playerId, (newID) => {
  playerInfoStore.playerId = newID
})

onMounted(() => {
  interval.value = setInterval(() => {
    flavourText.value = flavourTextOptions.value[Math.floor(Math.random() * flavourTextOptions.value.length)]
  }, 2000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="PlayerIdBox">
    <h1>Is it time to blame the <span class="TextAccent">META</span>?</h1>
    <p>Enter your player ID below and we'll analyse your past 20 matches to see if you <span
        class="TextHighlight">{{ flavourText }}</span></p>
    <input v-model="playerId" type="text" class="TextInput" placeholder="Player ID Example: 43760878" />
    <RouterLink @click="savePlayerIdToLocalStorage" class="button-40" to="/matches">Let's Go! <font-awesome-icon icon="fa-regular fa-circle-right"
        size="2xl" style="color: #cbccca;" /></RouterLink>
  </div>
</template>
  
<style scoped>
.PlayerIdBox {
  padding: 50px;
  width: 40%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  background-color: #F3F5F1;
}

.TextAccent {
  color: #879AAE;
}

.TextHighlight {
  color: #D59843;
}

p {
  margin-top: 10px;
}

.TextInput {
  margin-top: 20px;
  width: 400px;
  height: 40px;
  text-align: center;
  border: 3px solid #879AAE;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  margin-bottom: 10px;
}


/* CSS */
.button-40 {
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #1F2F3C;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .75rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}

.button-40:hover {
  background-color: #374151;
}

.button-40:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

@media (min-width: 768px) {
  .button-40 {
    padding: .75rem 1.5rem;
  }
}

input[type=text]:focus {
  border: 3px solid #D59843;
}</style>