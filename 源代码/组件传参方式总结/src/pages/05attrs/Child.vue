<script setup lang="ts">

const props = defineProps(['sh', 'sz']);
</script>

<template>
  <div class="child">
    <h3>我是子组件</h3>
    <p>我的房产：{{ props }}</p>
    <p>未分配的财产：{{ $attrs }}</p>
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