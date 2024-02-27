<script setup lang="ts">

import Category from "@/pages/09slot/Category.vue";

let games = ["英雄联盟", "王者荣耀", "绝地求生"];

</script>

<template>
  <div class="father">
    <h3>我是父组件</h3>
    <div class="content">
      <category title="热门游戏列表1">
        <!--   在template上可以设置目标插槽名   -->
        <template v-slot:s2>
          <ul>
            <li v-for="game in games" :key="game">{{ game }}</li>
          </ul>
        </template>
      </category>

      <!--   在组件上也可以设置目标插槽名   -->
      <category title="热门游戏列表2" v-slot:s1>
        <ul>
          <li v-for="game in games" :key="game">{{ game }}</li>
        </ul>
      </category>

      <category title="热门游戏列表3">
        <!--    简写写法    -->
        <template #s2>
          <ul>
            <li v-for="game in games" :key="game">{{ game }}</li>
          </ul>
        </template>
      </category>

      <!--   使用 slot 传递的数据   -->
      <category title="热门游戏列表4">
        <template #s3="param">
          <h2>{{ param.msg }}</h2>
          <ul>
            <li v-for="game in param.slotGames" :key="game">{{ game }}</li>
          </ul>
        </template>
      </category>

    </div>
  </div>
</template>

<style scoped>
.father {
  color: #64967e;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  border: 1px solid #64967e;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #64967e;
}

.content {
  display: flex;
  justify-content: space-around;
}
</style>