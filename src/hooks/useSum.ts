import {ref} from "vue";

export default () => {
    let sum = ref(0);

    function addSum() {
        sum.value++;
    }

    // 向外部提供数据和方法
    return {
        sum,
        addSum
    }
}