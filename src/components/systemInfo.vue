<template>
  <div class="device-info">
    <div>
      Device info: {{window.screen.width}}x{{window.screen.height}} ({{window.navigator.platform}})
    </div>
    <div>{{time}}</div>
  </div>
</template>
<script setup>
import {inject, onMounted, ref} from "vue";

const window = inject('window');

let time = ref(null);

function setTime(){
  let date = new Date();
  let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  time.value = `${hours}:${minutes}`;

  setTimeout(() => setTime(), 60000);
}

onMounted(()=>{
  setTime();
})


</script>

