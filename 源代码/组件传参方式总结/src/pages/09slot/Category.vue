<script setup lang="ts">

defineProps(['title']);

let slotGames = ["塞尔达传说", "刺客信条", "荒野大镖客"];

let msg = "我是插槽";
</script>

<template>
  <div class="category">
    <slot name="s1">默认</slot>
    <h2>{{ title }}</h2>
    <slot name="s2">默认内容</slot>

    <slot :slotGames="slotGames" :msg="msg" name="s3">默认内容</slot>
  </div>
</template>

<style scoped>

.category {
  color: #ffc268;
  padding: 20px;
  border: 1px solid #ffc268;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ffc268;
  width: 200px;
  height: 300px;
}

h2 {
  background-color: #ffc268;
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>