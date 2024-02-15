<script setup lang="ts">

import {reactive, watch} from "vue";

let person = reactive(
    {
      name: '张三',
      age: 18
    }
);

function changeName() {
  person.name += '~';
}

function changeAge() {
  person.age += 1;
}

function changePerson() {
  // 由于是 reactive 类型，只能使用 Object.assign 整体赋值
  Object.assign(person, {
    name: '李四',
    age: 20
  });
}

/**
 * 在监视的值是 reactive 类型的对象时, 任意成员发生变化，都会回调函数
 */
watch(
    person,
    (value, oldValue) => {
      console.log('Person 变化了', oldValue, value)
    },
    {
      deep: false
    }
);
</script>

<template>
  <div class="person">
    <h1>监视 reactive 定义的对象类型数据</h1>
    <h2>
      姓名: {{ person.name }}
    </h2>
    <h2>
      年龄: {{ person.age }}
    </h2>
    <button @click="changeName">更改姓名</button>
    <br>
    <button @click="changeAge">更改年龄</button>
    <br>
    <button @click="changePerson">换人</button>
  </div>
</template>

<style scoped>
.person {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
</style>