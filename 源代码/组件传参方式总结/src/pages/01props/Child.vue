<script setup lang="ts">
import {ref} from "vue";

let toy = ref('玩具汽车');
defineProps(['car', 'sendToy']);
</script>

<template>
  <div class="child">
    <h3>我是子组件</h3>
    <p>父亲给的车：{{ car }}</p>
    <button @click="sendToy(toy)">发送玩具</button>
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