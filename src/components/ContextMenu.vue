<template>
  <ul ref="contextMenu" :style="coordinates" v-show="isOpen">
    <li><a href="#">Header</a></li>
    <li><a href="#">Two</a></li>
    <li><a href="#">three</a></li>
  </ul>
</template>
<script setup>
import {onClickOutside} from "@vueuse/core";
import {onBeforeUnmount, onMounted, reactive, ref} from "vue";

const emits = defineEmits(['context:close', "context:open"]);
  const contextMenu = ref(null);

  let isOpen = ref(false);
  let coordinates = reactive({top: 0, left: 0, position: 'absolute'});

  onClickOutside(contextMenu, event => isOpen.value = false);


  onMounted(() => {
    window.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      console.log(event);
      const {layerX,layerY} = event;
      coordinates.top = `${layerY}px`;
      coordinates.left = `${layerX}px`;

      isOpen.value = true;
    })
  })

  onBeforeUnmount(() => {

  })

</script>


<style scoped>
  ul{
    background-color: rgba(44,178,3,0.87);
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 150px;
    height: max-content;
    z-index: 10;
    border: 1px solid black;
    color: black;
  }
  li:hover {
    background: black;
    color: rgba(44,178,3,0.87);
  }
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    color: inherit;
  }
</style>