<script setup lang="ts">

import useSum from "@/hooks/useSum";
import useDog from "@/hooks/useDog";

const {sum, addSum} = useSum();
const {dogList, getDog} = useDog();

</script>

<template>
  <div class="person">
    <h1>Sum={{ sum }}</h1>
    <button @click="addSum">增加</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" alt="">
    <button @click="getDog">再来一张</button>
  </div>
</template>

<style scoped>
.person {
  padding: 20px;
  background: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

img {
  height: 100px;
}
</style>
