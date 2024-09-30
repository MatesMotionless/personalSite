<template>
  <a href="#" @click.prevent="isOpen = true" class="icon" :style="{'grid-row': row, 'grid-column': column}">
<!--    <img :src="`/icons/${icon}.svg`" style="width: 100%; height: 100%;" :alt="title">-->
    <svg style="width: 100%; height: 100%;" color="blue">
      <use :href="`/icons/apps.svg#${icon}`"></use>
    </svg>
  </a>
  <teleport to="#app" >
    <WindowBase
        :title="title"
        @action:close="isOpen = false"
        v-if="isOpen"
        @last-position="saveLastPosition"
        @last-size="saveLastSize"
        :x="lastPosition.x"
        :y="lastPosition.y"
        :w="lastPosition.width"
        :h="lastPosition.height"
    >
      <slot>

      </slot>
    </WindowBase>
  </teleport>
</template>


<script setup>
import {reactive, ref} from "vue";
import WindowBase from "./WindowBase.vue";

defineProps(['title', 'row', 'column', 'icon']);

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

