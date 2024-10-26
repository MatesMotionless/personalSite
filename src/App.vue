<template>
  <ContextMenu/>
  <component v-for="(app, index) in availableApps" :is="app" :key="index" @action:open="test(app)"/>
</template>


<script setup>
import {onMounted, ref} from "vue";
import CV from "./components/apps/CV.vue";
import Terminal from "./components/apps/terminal.vue";
import About from "./components/apps/about.vue";
import ContextMenu from "./components/ContextMenu.vue";
import Browser from "./components/apps/browser.vue";
import {RUNTIME} from "./functions/runtime.js";

let availableApps =  [
  CV,
  Terminal,
  About,
  Browser
];


let isLoaded = ref(false);

function test(app){
  console.log(app);
}
onMounted(()=>{
  RUNTIME.setAvailableApps(availableApps);
  isLoaded.value = true;
})


</script>



