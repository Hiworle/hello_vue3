<script setup lang="ts">

import {ref} from "vue";

// 这个 ref 变量用于存储 ref 属性标记的 DOM
let msg = ref();

function showMsg() {
  console.log(msg.value);
}

// 只向父级传递公钥，而保留秘密
let secret = 'secret';
let pubKey = 'publish';

defineExpose({pubKey})
</script>

<template>

  <div class="person">
    <!--  这里的 ref 指的是向脚本传递 DOM  -->
    <h2 ref="msg">这是一条消息</h2>
    <button @click="showMsg">点我输出标题信息</button>
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