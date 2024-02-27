<script setup lang="ts">

import {ref} from "vue";

let money = ref(5);

// 暴露给外部
defineExpose({money})
</script>

<template>
  <div class="child">
    <h3>我是子组件2</h3>
    <p>我有{{ money }}块钱</p>
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