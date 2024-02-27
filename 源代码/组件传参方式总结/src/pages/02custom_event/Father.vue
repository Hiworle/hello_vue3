<script setup lang="ts">

import Child from "@/pages/02custom_event/Child.vue";
import {ref} from "vue";

let toy = ref('');

function saveToy(value: string, event: Event) {
  toy.value = value;
  console.log('触发事件', event)
}
</script>

<template>
  <div class="father">
    <h3>我是父组件</h3>
    <p v-show="toy">孩子的玩具：{{ toy }}</p>
    <Child @send-toy="saveToy"/>
  </div>
</template>

<style scoped>
.father {
  color: #64967e;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  border: 1px solid #64967e;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #64967e;
}
</style>