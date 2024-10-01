<template>
  <AppTemplate title="TermiNULL" :row="1" :column="1" icon="terminal" @action:open="windowOpened">
    <div class="terminal">
      <label for="terminalInput">

        <ul>
          <li v-for="(text,index) in terminalHistory" :class="!isEven(index) ? 'system' :''"> {{text}} </li>
        </ul>
        <div class="input-flex">
          <span>></span>
          <input type="text" disabled ref="terminalInput" id="terminalInput" :maxlength="maxLength" v-model="userInput" @keydown.prevent.enter="onInput" />
        </div>
        <span style="color: red" v-if="maxLength <= userInput.length">You somehow reached the limit of characters!</span>
      </label>
    </div>
  </AppTemplate>
</template>


<script setup>
import AppTemplate from "../AppTemplate.vue";
import {nextTick, ref} from "vue";
import {templateRef} from "@vueuse/core";

const terminalInput = templateRef('terminalInput');
let terminalHistory = ref(["Welcome to TermiNULL"]);
let userInput = ref("");
let maxLength = 40;

function onInput(){
  terminalHistory.value.push(userInput.value);
  userInput.value = "";
  terminalHistory.value.push('Response');
}

async function windowOpened(){
  await nextTick();
  terminalInput.value.focus();
}

function isEven(number){
  return number % 2 === 0;
}



</script>

