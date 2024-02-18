<script setup lang="ts">
import {onMounted} from "vue";
import {useRouter} from "vue-router";

// 获取路由本身
const router = useRouter();

onMounted(
    () => {
      setTimeout(() => {
        console.log('3s 到了')

        // 让路由实现跳转
        router.push({name: 'about'}) // push 模式跳转
        // router.replace('/about') // replace 模式跳转
      }, 3000);
    }
);
</script>

<template>
  <div class="home">
    <h2>这是首页</h2>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>