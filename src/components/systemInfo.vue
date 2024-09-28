<template>
  <div class="device-info">
    Device info: {{window.screen.width}}x{{window.screen.height}} ({{window.navigator.platform}})
  </div>
</template>
<script setup>
import {inject} from "vue";

const window = inject('window');
</script>

