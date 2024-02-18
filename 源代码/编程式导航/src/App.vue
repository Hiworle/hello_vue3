<script setup lang="ts">
</script>

<template>
  <div class="app">
    <!--  网站标题  -->
    <div class="title">Vue3 路由</div>
    <!--  导航区  -->
    <div class="navi">
      <RouterLink :to="{name:'home'}" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
      <RouterLink :to="{path: '/about'}" active-class="active">关于我们</RouterLink>
    </div>

    <!--  展示区  -->
    <div class="main-content">
      <!-- 对于路由组件，使用RouterView组件来展示  -->
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  background-color: white;
}

.title {
  text-align: center;
  word-spacing: 5px;
  margin: 30px auto 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, gray, white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
  width: 90%;
}

.navi {
  display: flex;
  justify-content: space-around;
  margin: 30px auto 0;
  width: 90%;
}

.navi a {
  display: block;
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: white solid;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}

.navi a.active {
  background-color: #64967e;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
}

.main-content {
  margin: 30px auto 0;
  border-radius: 10px;
  width: 90%;
  height: 200px;
  border: 1px solid;
}
</style>
