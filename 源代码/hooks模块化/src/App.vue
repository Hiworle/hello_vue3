<script setup lang="ts">
import Person from "@/pages/Person.vue";
import {ref} from "vue";

let isShow = ref(true);

</script>

<template>
  <div class="app">
    <Person v-if="isShow"></Person>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
</style>
