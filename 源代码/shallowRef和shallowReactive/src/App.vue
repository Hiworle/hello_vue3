<script setup lang="ts">

import {reactive, ref, shallowReactive, shallowRef} from "vue";

let sum = shallowRef(0);
let person = shallowRef({
  name: "John",
  age: 20
});

function changeSum() {
  sum.value++;
}

function changeName() {
  person.value.name += "~";
}

function changeAge() {
  person.value.age++;
}

function changePerson() {
  person.value = {
    name: "Jack",
    age: 30
  };
}

let car = shallowReactive(
    {
      brand: '奔驰',
      options: {
        color: 'red',
        engine: 'V8'
      }
    }
);
</script>

<template>
  <div class="app">
    <h2>和为：{{ sum }}</h2>
    <h2>名字为：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
    <button @click="changeSum">sum++</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>

    <hr>
    <h2>汽车: {{ car }}</h2>
    <button @click="car.brand = '大众'">修改品牌</button>
    <button @click="car.options.color = 'blue'">修改颜色</button>
    <button @click="car.options.engine = 'V12'">修改引擎</button>
    <button @click="Object.assign(car,{brand: '大众', options: {color: 'blue', engine: 'V12'}})">修改汽车</button>
  </div>
</template>

<style scoped>
</style>
