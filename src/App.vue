<template>
  <div class="device-info">
    Device info: {{window.screen.width}}x{{window.screen.height}} ({{window.navigator.platform}})
  </div>

  <main>
    <h1>Choose language</h1>
    <div>
      <a href="#" class="btn">CS</a>
      <a href="#" class="btn">EN</a>
    </div>
  </main>
</template>


<script setup>
import {inject} from "vue";
const window = inject('window');
</script>



