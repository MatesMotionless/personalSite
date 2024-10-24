<template>
  <ContextMenu/>
  <CV/>
  <Terminal/>
  <About/>
  <Browser/>
</template>


<script setup>
import {inject, onMounted, ref} from "vue";
import CV from "./components/apps/CV.vue";
import Terminal from "./components/apps/terminal.vue";
import About from "./components/apps/about.vue";
import ContextMenu from "./components/ContextMenu.vue";
import Browser from "./components/apps/browser.vue";

let isLoaded = ref(false);

let openedWindows = [];


function openWindow(window){

}


onMounted(()=>{
  isLoaded.value = true;
})


</script>



