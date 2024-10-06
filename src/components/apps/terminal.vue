<template>
  <AppTemplate title="TermiNULL" :row="1" :column="1" icon="terminal" @action:open="windowOpened">
    <div class="terminal">
      <label for="terminalInput">

        <ul>
          <li v-for="(text,index) in terminalHistory" :class="!isEven(index) ? 'system' :''"> <span v-html="text"></span> </li>
        </ul>
        <div class="input-flex">
          <span>></span>
          <input type="text" ref="terminalInput" id="terminalInput" :maxlength="maxLength" v-model="userInput" @keydown.prevent.enter="onInput" />
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
import {terminalLogic, parseCommand} from "../../functions/terminal-logic.js";

const terminalInput = templateRef('terminalInput');
let terminalHistory = ref(["Welcome to TermiNULL"]);
let userInput = ref("");
let maxLength = 40;

function onInput(){
  let input = userInput.value;
  input = input.replace(/(<([^>]+)>)/gi, ""); //replaces HTML tags from input
  terminalHistory.value.push(input);

  const {cmd, arg, context} = parseCommand(input);
  let response = "Invalid command";
  if(terminalLogic.checkCommand(cmd)){
    response = terminalLogic.runCommand(cmd, arg, context)
  }

  userInput.value = "";
  terminalHistory.value.push(response);
}

async function windowOpened(){
  await nextTick();
  terminalInput.value.focus();
}

function isEven(number){
  return number % 2 === 0;
}




</script>

