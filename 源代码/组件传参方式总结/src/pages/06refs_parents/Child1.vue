<script setup lang="ts">


import {ref} from "vue";

let money = ref(10);

function getMoney(parent: any) {
  console.log(parent)
  parent.money -= 1;
  money.value += 1;
}

// 暴露给外部
defineExpose({money})

</script>

<template>
  <div class="child">
    <h3>我是子组件1</h3>
    <p>我有{{ money }}块钱</p>
    <button @click="getMoney($parent)">跟父亲要1元</button>
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