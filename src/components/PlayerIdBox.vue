<script setup>
import { ref, onMounted, onUnmounted, watch} from 'vue'
import { playerInfoStore } from '../helpers/playerInfo'

// state
const flavourText = ref('choked')
const interval = ref()
const flavourTextOptions = ref(['choked', 'owned', 'beat the meta', 'had an unwinnable one', 'had a free game', 'beat the odds', 'proved the meta'])
const playerId = ref()

watch(playerId, (newID) => {
  console.log(`ID changed to ${newID}`)
  playerInfoStore.playerId = newID
})

onMounted(() => {
  console.log(`the component is now mounted.`)
  interval.value = setInterval(() => {
  flavourText.value = flavourTextOptions.value[Math.floor(Math.random() * flavourTextOptions.value.length)]
  }, 2000)
})

onUnmounted(() => {
  console.log('destroying interval')
  clearInterval(interval)
})
</script>

<template>
    <div class="PlayerIdBox">
        <h1>Is it time to blame the <span class="TextAccent">meta</span>?</h1>
        <p>Enter your player ID below and we'll analyse your past 10 matches to see if you <span class="TextHighlight">{{flavourText}}</span></p>
        <input v-model="playerId" type="text" class="TextInput" placeholder="Player ID Example: 43760878"/>
    </div>
  </template>
  
  <style scoped>
    .PlayerIdBox {
        background-color: #F3F5F1;
        height: 25%;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
    }
    .TextAccent {
      color: #879AAE;
    }
    .TextHighlight {
      color: #D59843;
    }
    h1 {
      margin-top: 10px;
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
    }

    input[type=text]:focus {
      border: 3px solid #D59843;
    }
  </style>