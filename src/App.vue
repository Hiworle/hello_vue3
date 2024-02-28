<script setup lang="ts">
import useMsgRef from "@/hooks/useMsgRef";

// 默认的响应式数据，数据变化，页面就更新
// let msg = ref('你好');

// 使用防抖，1s 后再更新页面，注意解构数据
let {msg} = useMsgRef('你好', 1000);
</script>

<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
  </div>

  <Suspense>
    <template #default>
      <!--   异步任务执行完毕时出现   -->
      <Child/>
    </template>
    <template #fallback>
      <!--   异步任务执行未完成   -->
      加载中....
    </template>
  </Suspense>
</template>

<style scoped>

</style>
