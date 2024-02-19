<script setup lang="ts">

import axios from "axios";
import {useLoveWordsStore} from "@/store/LoveWords";

let {loveWordsList} = useLoveWordsStore();

async function getLoveWords() {
  try {
    // 连续解构的写法+重命名
    let {data:{content: words}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");

    // 将获取到的内容添加到数组的最前面
    loveWordsList.unshift(words);
  } catch (e) {
    alert(e);
  }
}
</script>

<template>
  <div class="words">
    <button @click="getLoveWords">获取一句情话</button>
    <ul>
      <li v-for="words in loveWordsList" :key="words">
        {{ words }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.words {
  background-color: orange;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>