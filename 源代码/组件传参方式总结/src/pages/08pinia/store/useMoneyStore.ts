import {defineStore} from "pinia";
import {ref} from "vue";

export default defineStore("moneyStore", () => {
    let money = ref(0);
    return {
        money
    }
});