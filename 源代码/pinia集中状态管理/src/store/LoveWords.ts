import {defineStore} from "pinia";

export const useLoveWordsStore = defineStore("LoveWords", {
    state() {
        const loveWordsList: string[] = [];
        return {
            loveWordsList
        }
    },
});