<script setup lang="ts">

import Child from "@/pages/07provide_inject/Child.vue";

</script>

<template>
  <div class="father">
    <h3>我是父组件</h3>
    <child/>
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