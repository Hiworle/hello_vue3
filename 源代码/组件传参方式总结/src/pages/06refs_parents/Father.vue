<script setup lang="ts">

import Child1 from "@/pages/06refs_parents/Child1.vue";
import Child2 from "@/pages/06refs_parents/Child2.vue";
import {ref} from "vue";

let money = ref(1000);

function sendMoney(refs: any) {
  for (const key in refs) {
    console.log(key, refs[key]);
    money.value -= 10;
    refs[key].money += 10;
  }
}

// 暴露给子组件
defineExpose({money})
</script>

<template>
  <div class="father">
    <h3>我是父组件</h3>
    <p>我的余额是：{{ money }}</p>
    <button @click="sendMoney($refs)">发送零花钱</button>
    <child1 ref="c1"/>
    <child2 ref="c2"/>
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