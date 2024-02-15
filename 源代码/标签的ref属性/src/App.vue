<script setup lang="ts">
import Person from "@/components/Person.vue";
import {ref} from "vue";

// 声明一个 ref 用于存储该元素的引用
let child = ref();

function showChild() {
  console.log(child.value);
}
</script>

<template>
  <!-- html -->
  <div class="app">
    <h1>Hello VUE3</h1>

    <button @click="showChild">点我输出子组件</button>
  </div>

  <Person ref="child"></Person>
</template>

<style>
/*样式*/
.app {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
</style>
