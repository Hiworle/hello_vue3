<script setup lang="ts">
import {ref} from "vue";

// 引入定义的store
import {useCounterStore} from "@/store/Conuter";

const counterStore = useCounterStore();
let n = ref(1);

// 监听数据变化，并保存到localStorage中
counterStore.$subscribe((mutation, state) => {
  localStorage.setItem('sum', state.sum.toString());
})
</script>

<template>
  <div class="counter">
    <!--  counterStore.sum 本身是响应式的，可以读写  -->
    <h2>当前求和为：{{ counterStore.sum }}</h2>
    <!--  v-model 的作用是，当select的值发生变化时，会自动更新n的值，v-model.number 是把n转成number类型  -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!--  可以直接使用counterStore的add和sub方法  -->
    <button @click="counterStore.add(n)">加</button>
    <button @click="counterStore.sub(n)">减</button>
  </div>
</template>

<style scoped>
.counter {
  margin: 20px;
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 5px;
  height: 25px;
}
</style>