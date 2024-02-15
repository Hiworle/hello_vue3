<script setup lang="ts">

import {ref, watch, watchEffect} from "vue";

let sum = ref(0);

function changeSum() {
  sum.value++;
}

// // 需要指出监视的对象
// watch(
//     sum,
//     (value) => {
//       if (value >= 10) {
//         console.log('条件满足啦')
//       }
//     }
// );

// 不需要指出监视的对象
watchEffect(
    () => {
      if (sum.value >= 10) {
        console.log('条件满足啦')
      }
    }
);

</script>

<template>

  <div class="person">
    <h2>当前求和为： {{ sum }}</h2>
    <button @click="changeSum">点我sum++</button>
  </div>
</template>

<style scoped>
.person {
  background: lightblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
  0 0 0 2px rgb(255, 255, 255),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
</style>