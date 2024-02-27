<script setup lang="ts">

import emitter from "@/utils/emitter";
import {ref} from "vue";

let toy = ref('玩具汽车');

</script>

<template>
  <div class="child">
    <h3>我是子组件1</h3>
    <p v-show="toy">正在玩汽车</p>
    <!--  触发事件  -->
    <button @click="emitter.emit('send-toy', toy)">给弟弟玩汽车</button>
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