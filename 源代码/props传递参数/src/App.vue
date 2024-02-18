<script setup lang="ts">
import {reactive} from "vue";
import type {IPerson} from "@/tppes";
import Person from "@/pages/Person.vue";

let personList = reactive<IPerson[]>(
    [
      {id: '1', name: '张三', age: 18, address: '北京'},
      {id: '2', name: '李四', age: 29},
      {id: '3', name: '王五', age: 30},
    ]
)
</script>

<template>
  <Person a="来自父亲的爱" b="bbb" :list="personList"/>
</template>

<style>
/*样式*/
.app {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
</style>
