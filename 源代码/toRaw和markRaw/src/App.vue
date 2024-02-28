<script setup lang="ts">


import {markRaw, reactive, ref, toRaw} from "vue";

let person = reactive(
    {
      name: '张三',
      age: 12
    }
);

let raw = toRaw(person)
console.log(raw);

function changeAge() {
  person.age++;
  console.log(person);
  console.log(raw)
}

function changeRaw() {
  console.log(raw)
  raw.age++;
}

// 规定 car 永远不可变为响应式
let car = markRaw({brand: 'BMW', price: 100});

let reactive1 = reactive(car);
console.log(reactive1) // 返回的仍然是原始对象

</script>

<template>
  <div class="app">
    <h2>年龄为：{{ person.age }}</h2>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeRaw">修改raw</button>

    <hr>

    <h2>{{ car }}</h2>
    <button @click="car.price+=10">点我价格+10</button>
  </div>
</template>

<style scoped>
</style>
