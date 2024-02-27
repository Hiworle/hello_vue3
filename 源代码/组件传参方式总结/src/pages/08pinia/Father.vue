<script setup lang="ts">

import Child1 from "@/pages/08pinia/Child1.vue";
import Child2 from "@/pages/08pinia/Child2.vue";
import useMoneyStore from "./store/useMoneyStore";
</script>

<template>
  <div class="father">
    <h3>我是父组件</h3>
    <p>家里共有{{ useMoneyStore().money }}元</p>
    <child1/>
    <child2/>
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