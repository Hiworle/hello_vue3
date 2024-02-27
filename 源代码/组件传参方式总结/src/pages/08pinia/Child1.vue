<script setup lang="ts">

import useMoneyStore from "@/pages/08pinia/store/useMoneyStore";

const moneyStore = useMoneyStore();

</script>

<template>
  <div class="child">
    <h3>我是子组件1</h3>
    <button @click="moneyStore.money++">赚钱</button>
  </div>
</template>

<style scoped>
.child {
  color: #ffc268;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  border: 1px solid #ffc268;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ffc268;
}
</style>