<template>
  <a href="#" @click.prevent="isOpen = true" class="icon" style="grid-row: 5; grid-column: 6">Test</a>
  <teleport to="#app" >
    <WindowBase
        title="Test"
        @action:close="isOpen = false"
        v-if="isOpen"
        @last-position="saveLastPosition"
        @last-size="saveLastSize"
        :x="lastPosition.x"
        :y="lastPosition.y"
        :w="lastPosition.width"
        :h="lastPosition.height"
    >
      This is my content
    </WindowBase>
  </teleport>
</template>


<script setup>
import WindowBase from "../WindowBase.vue";
import {reactive, ref} from "vue";

let isOpen = ref(false);
let lastPosition = reactive({
  x:0,
  y:0,
  width: 350,
  height: 230
});


function saveLastPosition(obj){
  lastPosition.y = obj.y;
  lastPosition.x = obj.x;
}

function saveLastSize(obj){
  lastPosition.height = obj.height;
  lastPosition.width = obj.width;
  saveLastPosition(obj);
}

</script>

