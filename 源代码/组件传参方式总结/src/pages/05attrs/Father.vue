<script setup lang="ts">

import Child from "@/pages/05attrs/Child.vue";

defineProps(['bj']);
</script>

<template>
  <div class="father">
    <h3>我是父组件</h3>
    <p>拥有的房产：{{ bj }}</p>
    <p>剩下的房产给儿子：{{ $attrs }}</p>
    <!--  将剩下的属性传递给子组件  -->
    <child v-bind="$attrs"/>
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