<script setup lang="ts">
import {ref, watch} from "vue";

// 数据
let sum = ref(0);

// 方法
function changeSum() {
  sum.value++;
}

/**
 * 监视器
 *
 * 第一个参数是监视源
 *
 * 第二个参数是回调函数
 *
 * 返回值是一个函数，通过调用返回的函数，可以停止监视
 */
const stopWatch = watch(
    sum,
    (value, oldValue) => {
      console.log('sum 变化了', oldValue, value);
      if (value >= 10) {
        stopWatch();
      }
    }
);
</script>

<template>
  <div class="person">
    <h1>监视 ref 定义的基本类型数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<style scoped>
.person {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
</style>