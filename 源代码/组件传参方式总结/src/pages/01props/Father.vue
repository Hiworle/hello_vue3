<script setup lang="ts">

import Child from "@/pages/01props/Child.vue";
import {reactive, ref} from "vue";

let car = reactive(
    {
      brand: "Benz",
      color: "red",
      price: 100000
    }
);

let toy = ref('');

function getToy(value: string) {
  toy.value = value;
}
</script>

<template>
  <div class="father">
    <h3>我是父组件</h3>
    <p>我的车：{{ car }}</p>
    <p v-show="toy">孩子的玩具：{{ toy }}</p>
    <Child :car="car" :sendToy="getToy"/>
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