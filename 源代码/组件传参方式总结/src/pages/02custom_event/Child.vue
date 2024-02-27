<script setup lang="ts">
import {ref} from "vue";

let toy = ref('玩具汽车');

const emits = defineEmits(['send-toy']);
</script>

<template>
  <div class="child">
    <h3>我是子组件</h3>
    <p>我的玩具：{{ toy }}</p>
    <button @click="emits('send-toy', toy, $event)">给父亲</button>
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