<template>
  <a href="#" @click.prevent="isOpen = true" class="icon" :style="{'grid-row': row, 'grid-column': column}">
    <svg>
      <use :href="`/icons/apps.svg#${icon}`"></use>
    </svg>
  </a>
  <teleport to="#app" >
    <WindowBase
        :title="title"
        @action:close="isOpen = false"
        @action:fullscreen="toggleFullscreen"
        v-if="isOpen"
        @last-position="updateCoordinates"
        @last-size="updateCoordinates"
        v-bind="attrs"
        v-bind:style="$attrs.style"
    >
      <slot>
        <!--Content here-->
      </slot>
    </WindowBase>
  </teleport>
</template>


<script setup>
import {reactive, ref, watch} from "vue";
import WindowBase from "./WindowBase.vue";

defineProps(['title', 'row', 'column', 'icon']);
const emit = defineEmits( ['action:open', 'action:close', 'window:resize', 'window:move', 'action:fullscreen']);




let isOpen = ref(false);
let isFullScreen = ref(false);

watch(isOpen, ()=>{
  isOpen.value ? emit('action:open') : emit('action:close');

})

let attrs = reactive({
  x:0,
  y:0,
  w: 350,
  h: 230
});



function updateCoordinates(coordinates){
  if (coordinates.hasOwnProperty('y')){
    attrs.y = coordinates.y;
  }
  if (coordinates.hasOwnProperty('x')){
    attrs.x = coordinates.x;
  }
  if (coordinates.hasOwnProperty('height')){
    attrs.h = coordinates.height;
    emit('window:resize');
  }else{
    emit('window:move');
  }
  if (coordinates.hasOwnProperty('width')){
    attrs.w = coordinates.width;
  }
}


let savedCoordinates = {};
async function toggleFullscreen() {
  isFullScreen.value = !isFullScreen.value;
  attrs.draggable = !isFullScreen.value;
  attrs.resizable = !isFullScreen.value;
  if(isFullScreen.value){
    emit('action:fullscreen', true );
    const {y,x,w,h} = {...attrs};
    savedCoordinates = {y:y, x:x, w:w, h:h};
    attrs.y = 0;
    attrs.x = 0;
    attrs.class = "fullscreen";
    attrs.style = {width: '100vw !important',
      height: '100vh !important',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'fixed',
      zIndex: 3
    }
  }else{
    emit('action:fullscreen', false);
    const {y,x,w,h} = savedCoordinates;
    delete attrs.style;
    delete attrs.class;
    //await nextTick();
    attrs.y = y;
    attrs.x = x;
    attrs.w = w;
    attrs.h = h;
  }
}

</script>

