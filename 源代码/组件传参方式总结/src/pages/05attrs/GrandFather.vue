<script setup lang="ts">

import Father from "@/pages/05attrs/Father.vue";
import {reactive} from "vue";

let houses = reactive([
  {
    area: 100,
    value: 1000_0000,
    location: '北京'
  },
  {
    area: 200,
    value: 2000_0000,
    location: '上海'
  },
  {
    area: 300,
    value: 3000_0000,
    location: '深圳'
  },
  {
    area: 400,
    value: 4000_0000,
    location: '杭州'
  }
]);

</script>

<template>
  <div class="grand-father">
    <h3>我是爷</h3>
    <p>持有的房产：{{ houses }}</p>
    <father :bj="houses[0]" :sh="houses[1]" :sz="houses[2]" :hz="houses[3]"/>
  </div>
</template>

<style scoped>
.grand-father {
  color: palevioletred;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  border: 1px solid palevioletred;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px palevioletred;
}
</style>