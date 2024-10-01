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
  time.value = `${date.getHours()}:${date.getMinutes()}`;
  setTimeout(() => setTime(), 60000);
}

onMounted(()=>{
  setTime();
})


</script>

