<template>
  <AppTemplate
      title="Browser"
      column="3"
      row="3"
      icon="browser"
      style="display: flex; flex-direction: column;"
      @window:resize="onResize"
      @action:fullscreen="onResize"
  >
    <div class="browser-top">
      <a class="browser-top__icon">
        <svg>
          <use href="/icons/util.svg#bookmark"></use>
        </svg>
      </a>
      <input disabled placeholder="home://bookmarks" :value="currentUrl">
    </div>
    <div class="wh-full browser-view" ref="browserView">
      <iframe
          v-if="currentUrl"
          :width="iframeDimensions.width"
          :height="iframeDimensions.height"
          :src="currentUrl"
          title="YouTube video player"
          frameborder="0"
      ></iframe>
      <div v-else>
        <button v-for="bookmark in bookmarks" @click="currentUrl = bookmark.url">{{bookmark.name}}</button>
      </div>
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

let currentUrl = ref(null);


let bookmarks = [
  {
    name: "Elpida",
    url: "https://elpida.cz"
  },
  {
    name: "BDL",
    url: "https://bdl.cz"
  },
  {
    name: "Greendot",
    url: "https://greendot.cz"
  }
  ];


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
.browser-top {
  display: flex;
  padding-top: 13px;
}

& input, textarea {
  font: inherit;
  width: 100%;
  -webkit-appearance: none;
  border: 1px dotted rgba(44, 178, 3, 0.87) ;
  height: 65%;
  background-color: transparent;
  &:focus, &:focus-visible, &:focus-within {
    border: 1px dotted ;
    outline: none;
  }
  &::selection {
    background: rgba(255, 255, 255, 0.34);
    color: white;
  }
}

.browser-top__icon {
  width: 5%;
  height: 65%;
  svg{
    width: 20px;
    height: 20px;
  }
}
</style>