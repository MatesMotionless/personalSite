<template>
  <VueDraggableResizable
      :min-width="350"
      :min-height="230"
      drag-handle=".drag-handle"
      :handles="handles"
      :parent="true"
      @drag-stop="(x,y)=> $emit('lastPosition', {x: x, y:y})"
      @resize-stop="(left, top, width, height) => $emit('lastSize',{x: left, y: top, width: width, height: height})"
      @dragging="$emit('action:dragging')"
      :prevent-deactivation="true"
      :active="true"
      :z="zIndex"
  >
    <div class="top-window">
      <div class="drag-handle"><span>{{ title }}</span></div>
      <a class="button" @click.prevent="$emit('action:fullscreen')">#</a>
      <a class="button" @click.prevent="$emit('action:close')">X</a>
    </div>
    <div class="app-content" :style="appContentStyles">
      <slot>

      </slot>
    </div>
  </VueDraggableResizable>
</template>
<script setup>
import VueDraggableResizable from "vue-draggable-resizable";
import {ref} from "vue";

defineProps(["title", 'appContentStyles']);
defineEmits(['action:close', 'action:fullscreen', 'lastPosition', 'lastSize', "action:dragging"]);

let zIndex = ref(2);

const handles = [
  'br',
  'bl',
  'tr',
  'tl',
];


</script>

