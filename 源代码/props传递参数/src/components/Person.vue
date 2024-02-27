<script setup lang="ts">

// 接收 01props
import type {IPerson} from "@/tppes";

// 「不推荐」不限制类型的做法
// let x = defineProps(['a', 'list']);

// 「推荐」限制接收参数的类型
// let x = defineProps<{ a: string; list: IPerson[] }>();

// 「推荐」限制 接收参数的类型 以及 必要性 和 默认值
let x = withDefaults(
    defineProps<{ a: string; list: IPerson[], b?: string }>(),
    {
      a: '默认值',
      list: () => [] // 数组或对象的默认值需要传入一个函数，设置为其返回值
      // b 可以不配置默认值
    }
);

// 返回的 x 是包含了 a 和 list 的对象，并且是响应式的
console.log(x);

</script>

<template>

  <div class="person">
    <!--  由 01props 接收的参数，可以像普通变量那样使用，这里的效果等同于 x.a  -->
    <h2>{{ a }}</h2>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} -- {{ item.age }}
      </li>
    </ul>
    <h2>{{ b }}</h2>
  </div>
</template>

<style scoped>
.person {
  background: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>