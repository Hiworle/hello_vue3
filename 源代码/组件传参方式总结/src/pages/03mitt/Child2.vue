<script setup lang="ts">

import emitter from "@/utils/emitter";
import {onUnmounted, ref} from "vue";

let toy = ref('');

// 绑定触发事件
emitter.on('send-toy', (value: any) => {
  toy.value = value;
  console.log('send', value)
});

// 在组件卸载时，解绑触发事件
onUnmounted(() => {
  emitter.off('send-toy');
})
</script>

<template>
  <div class="child">
    <h3>我是子组件2</h3>
    <p v-show="toy">正在玩汽车</p>
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