<script setup lang="ts">
</script>

<template>
  <div class="app">
    <!--  导航区  -->
    <router-link to="/props">props父子通信</router-link>
    <router-link to="/custom_event">custom event自定义事件</router-link>
    <router-link to="/mitt">emit发布订阅事件</router-link>
    <router-link to="/v-model">v-model双向绑定传递</router-link>
    <router-link to="/attrs">attrs祖孙传参</router-link>
    <router-link to="/refs_parents">$refs，$parents传递组件实例</router-link>
    <router-link to="/provide_inject">provide、inject祖孙通信</router-link>
    <router-link to="/pinia">pinia任意组件通信</router-link>
    <router-link to="/slot">slot插槽</router-link>
    <!--  展示区  -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
