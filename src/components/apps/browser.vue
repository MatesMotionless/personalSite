<template>
  <AppTemplate
      title="Browser"
      column="3"
      row="3"
      icon="about"
      style="padding: 0; display: flex; flex-direction: column"
      @window:resize="onResize"
      @action:fullscreen="onResize"
  >
    <div class="browser-top">
      <input>
    </div>
    <div class="wh-full browser-view" ref="browserView">
      <iframe
          :width="iframeDimensions.width"
          :height="iframeDimensions.height"
          src="http://localhost:5173/"
          title="YouTube video player"
          frameborder="0"
      ></iframe>
    </div>
  </AppTemplate>
</template>
<script setup>
import AppTemplate from "../AppTemplate.vue";
import {nextTick, onMounted, reactive, ref} from "vue";
const browserView = ref(null);

const iframeDimensions = reactive({
  width: 0,
  height: 0
});
async function onResize(){
  await nextTick();
  if(browserView.value){
    iframeDimensions.width =browserView.value.offsetWidth;
    iframeDimensions.height = browserView.value.offsetHeight;
  }
}

onMounted(() => {
  onResize();
})
</script>


<style scoped>
.wh-full{
  width: 100%;
  height: 100%;
}

.browser-view{
  overflow: hidden;
}
</style>