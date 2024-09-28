<template>
  <VueDraggableResizable
      :min-width="350"
      :min-height="230"
      drag-handle=".drag-handle"
      :handles="handles"
      :parent="true"
      @drag-stop="(x,y)=> $emit('lastPosition', {x: x, y:y})"
      @resize-stop="(left, top, width, height) => $emit('lastSize',{x: left, y: top, width: width, height: height})"
      :prevent-deactivation="true"
      :active="true"
  >
    <div class="top-window">
      <div class="drag-handle"><span>{{title}}</span></div>
      <a class="button" @click.prevent="$emit('action:close')">X</a>
    </div>
    <div style="width: 100%; height: 100%; padding: 5px">
      <slot>

      </slot>
    </div>
  </VueDraggableResizable>
</template>
<script setup>

import VueDraggableResizable from "vue-draggable-resizable";

const props = defineProps(["title"]);

defineEmits(['action:close', 'lastPosition', 'lastSize']);

function test(left, top, width, height){
  console.log(left, top, width, height);
}

const handles = [
  'br',
  'bl',
  'tr',
  'tl',
];


</script>

