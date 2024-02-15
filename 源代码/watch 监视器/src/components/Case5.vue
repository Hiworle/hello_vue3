<script setup lang="ts">

import {reactive, watch} from "vue";

let person = reactive(
    {
      name: '张三',
      age: 18,
      car: {
        brand: 'BMW',
        price: 99
      }
    }
);

function changeName() {
  person.name += '~';
}

function changeAge() {
  person.age += 1;
}

function changeCarBrand() {
  person.car.brand += '.';
}

function changeCarPrice() {
  person.car.price++;
}

function changeCar() {
  person.car = {
    brand: 'BYD',
    price: 19
  }
}

// 监视上述的多个数据
watch(
    [() => person.name, () => person.car.brand],
    (value, oldValue) => {
      console.log('name/brand 变化了', value, oldValue)
    }
);

</script>

<template>
  <div class="person">
    <h1></h1>
    <h2>
      姓名: {{ person.name }}
    </h2>
    <h2>
      年龄: {{ person.age }}
    </h2>
    <h2>
      汽车：{{ person.car }}
    </h2>
    <button @click="changeName">更改姓名</button>
    <br>
    <button @click="changeAge">更改年龄</button>
    <br>
    <button @click="changeCarBrand">修改汽车品牌</button>
    <br>
    <button @click="changeCarPrice">修改汽车价格</button>
    <br>
    <button @click="changeCar">修改汽车</button>
  </div>
</template>

<style scoped>
.person {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
</style>