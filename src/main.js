import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'


const app = createApp(App);
app.provide('window', window);
app.mount('#app');
