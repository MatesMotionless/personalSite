import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import SystemInfo from "./components/systemInfo.vue";
import VueDraggableResizable from 'vue-draggable-resizable';
import Background from "./components/background.vue";


const app = createApp(App);
app.component("vue-draggable-resizable", VueDraggableResizable)
app.mount('#app');


const systemInfo = createApp(SystemInfo);
systemInfo.provide('window', window);
systemInfo.mount('#systemInfo');

const bg = createApp(Background).mount('#background');