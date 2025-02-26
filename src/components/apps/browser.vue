<template>
  <AppTemplate
      title="Browser"
      column="3"
      row="3"
      icon="browser"
      :app-content-styles="isFullscreen ? 'filter: brightness(0.5);display: flex; flex-direction: column;':'display: flex; flex-direction: column;'"
      @window:resize="onResize"
      @action:fullscreen="onFullscreen"
  >
    <div class="browser-top">
      <a class="browser-top__icon" @click="currentUrl = null">
        <svg>
          <use href="/icons/util.svg#bookmark"></use>
        </svg>
      </a>
      <input disabled placeholder="home://bookmarks" :value="currentUrl">
      <a class="browser-top__icon">
        <svg>
          <use href="/icons/util.svg#bookmark"></use>
        </svg>
      </a>
    </div>
    <div class="wh-full browser-view" ref="browserView" :class="{'browser-view__scrollable' : currentUrl == null}">
      <iframe
          v-if="currentUrl"
          :width="iframeDimensions.width"
          :height="iframeDimensions.height"
          :src="currentUrl"
          title="YouTube video player"
          frameborder="0"
      ></iframe>
      <div v-else class="bookmark-list">
        <a class="bookmark" v-for="bookmark in bookmarks" href="#" @click.prevent="currentUrl = bookmark.url">
          <h3>{{bookmark.name}}</h3>
          <p>{{bookmark.description}}</p>
        </a>
      </div>
    </div>
  </AppTemplate>
</template>
<script setup>
import AppTemplate from "../AppTemplate.vue";
import {nextTick, onMounted, reactive, ref, watch} from "vue";
const browserView = ref(null);

const iframeDimensions = reactive({
  width: 0,
  height: 0
});

let currentUrl = ref(null);


let bookmarks = [
  {
    name: "Proklima",
    url: "https://proklima.cz",
    description: "Prodej a montáž značkové stínící techniky firmy CLIMAX"
  },
  {
    name: "Optixs",
    url: "https://optixs.cz",
    description: "Dodavatel a integrátor laserů a přístrojové techniky"
  },
  {
    name: "MagnaVita",
    url: "https://magnavita.cz",
    description: "Klinika fyzioterapie v Ďáblicích"
  },
  {
    name: "BDL",
    url: "https://bdl.cz",
    description: "Největší e-shop s laboratorním vybavením v ČR nabojený na katalog a skladové informace dodavatele LLG."
  },
  {
    name: "Greendot",
    url: "https://greendot.cz",
    description: "Webová stránka greendot webového studia a marketingové kanceláře"
  },
  {
    name: "Elpida",
    url: "https://elpida.cz",
    description: "Rezervační systém aktivit pro lidi v důchodovém věku"
  },
  ];

let isFullscreen = ref(false);

function onFullscreen(){
  isFullscreen.value = !isFullscreen.value;
  onResize();
}
async function onResize(){
  await nextTick();
  if(browserView.value){
    iframeDimensions.width =browserView.value.offsetWidth;
    iframeDimensions.height = browserView.value.offsetHeight;
  }
}

watch(currentUrl, (newValue, oldValue) => {
  if(newValue !== null){
    onResize() ;
  }
})


onMounted(() => {
  onResize();
})
</script>


<style scoped>
.wh-full{
  width: 100%;
  height: 100%;
}

.browser-top {
  display: flex;
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
  cursor: pointer;
  height: 65%;
  svg{
    width: 20px;
    height: 20px;
  }
}
</style>