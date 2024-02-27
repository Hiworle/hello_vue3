<script setup lang="ts">
const props = defineProps(['modelValue', 'myModel']);
const emits = defineEmits(['update:modelValue', "update:myModel"]);

console.log(props.myModel);
</script>

<template>
  <input type="text"
         :value="modelValue"
         @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<style scoped>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, rebeccapurple, mediumpurple, darkslateblue);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>