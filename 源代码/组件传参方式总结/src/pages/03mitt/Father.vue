<script setup lang="ts">

import Child1 from "@/pages/03mitt/Child1.vue";
import Child2 from "@/pages/03mitt/Child2.vue";

</script>

<template>
  <div class="father">
    <h3>我是父组件</h3>
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