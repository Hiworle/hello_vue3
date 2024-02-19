import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCounterStore = defineStore('counter', () => {
    // 数据
    const sum = ref(parseInt(localStorage.getItem('sum') || '0'));

    // 操作
    function add(val: number) {
        sum.value += val;
    }

    function sub(val: number) {
        sum.value -= val;
    }

    // 计算方法
    const doubleSum = computed(() => sum.value * 2);
    const halfSum = computed(() => sum.value / 2);

    // 最终需要暴露出去
    return {
        sum,
        add,
        sub,
        doubleSum,
        halfSum
    }
});