<script setup lang="ts">

import {ref, watch} from "vue";

let person = ref(
    {
      name: '张三',
      age: 18,
      c: {
        d: {
          e: 666
        }
      }
    }
);

function changeName() {
  person.value.name += '~';
}

function changeAge() {
  person.value.age += 1
  person.value.c.d.e += 1;
}

function changePerson() {
  person.value = {
    name: '李四',
    age: 20,
    c: {
      d: {
        e: 888
      }
    }
  };
}

/**
 * 在监视的值是 ref 类型的对象时, 默认只有整个对象发生变化, 回调函数才会生效
 *
 * 在本例中：
 *
 * - 更改名称/年龄：不生效
 * - 更改整个对象：生效
 */
watch(
    person,
    (value, oldValue) => {
      console.log('Person 变化了', oldValue, value)
    }, {
      deep: true
    }
);

// /**
//  * 通过 watch 函数的第三个参数开启深度监视
//  */
// watch(
//     person,
//     (value, oldValue) => {
//       console.log('Person 变化了', oldValue, value)
//     },
//     {
//       deep: true, // 深度监视，开启后同时监视所有成员属性
//       immediate: true // 立即监视，开启后会在数据初始化时就执行一次，此时新值为当前值，旧值为 undefined
//     }
// );
</script>

<template>
  <div class="person">
    <h1>监视 ref 定义的对象类型数据</h1>
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