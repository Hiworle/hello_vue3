<script setup lang="ts">

import {reactive, readonly, ref, shallowReadonly} from "vue";

let sum = ref(0);

let readOnlySum = readonly(sum);

function changeSum() {
  sum.value++;
}

function changeReadOnly() {
  // 报错，不允许修改只读变量
  readOnlySum.value++;
}

let car = reactive(
    {
      brand: '奔驰',
      options: {
        color: '红色',
        engine: 'V8'
      }
    }
);
let car2 = shallowReadonly(car);

</script>

<template>
  <div class="app">
    <h2>和为：{{ sum }}</h2>
    <h2>只读内容为：{{ readOnlySum }}</h2>
    <button @click="changeSum">sum++</button>
    <button @click="changeReadOnly">readOnly++</button>

    <hr>

    <h2>汽车为：{{ car }}</h2>
    <h2>只读内容为：{{ car2 }}</h2>
    <!--  报错，不允许更改只读变量  -->
    <button @click="car2.brand='大众'">更改品牌</button>
    <!--  不报错  -->
    <button @click="car2.options.color='蓝色'">更改颜色</button>
    <button @click="car2.options.engine='V12'">更改引擎</button>
  </div>
</template>

<style scoped>
</style>
