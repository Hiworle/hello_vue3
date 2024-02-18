<script setup lang="ts">
import {reactive} from "vue";

let newsList = reactive([
  {id: 'adiojo01', title: '震惊，万万没想到...', content: '明天是周一'},
  {id: 'adiojo02', title: '好消息！', content: '快过年了'},
  {
    id: 'adiojo03',
    title: '权威发布！',
    content: '今年二月有29天！'
  },
  {id: 'adiojo04', title: '点击就送三千万！', content: '千万要幸福，千万要健康，千万要快乐'},
  {id: 'adiojo05', title: '老公今天不回家，她...', content: '少煮了一个人的饭'}
]);
</script>

<template>
  <div class="news">
    <!--  导航区  -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
<!--        <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">-->
<!--          {{ news.title }}-->
<!--        </RouterLink>-->

        <RouterLink :to="{
                  // 或者基于 path
                  // path: '/news/detail',
                  name: 'detail',
                  params: {
                    id: news.id,
                    title: news.title,
                    content: news.content
                  }
                }">
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>

    <!--  展示区  -->
    <div class="news-content">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news-content {
  width: 70%;
  height: 90%;
  border: grey solid 1px;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  margin-top: 10px;
}

.news ul {
  /*list-style: none;*/
  margin-top: 30px;
  padding-left: 10px;
}

.news li::marker {
  color: #64967e;
}

.news li > a {
  font-size: 18px;
  line-height: 30px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
</style>