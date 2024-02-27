<script setup lang="ts">

import useMoneyStore from "@/pages/08pinia/store/useMoneyStore";

</script>

<template>
  <div class="child">
    <h3>我是子组件2</h3>
    <button @click="useMoneyStore().money--">花钱</button>
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