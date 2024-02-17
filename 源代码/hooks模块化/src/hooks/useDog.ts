import axios from "axios";
import {ref} from "vue";


export default function () {
    let dogList = ref([
        'https://images.dog.ceo/breeds/pembroke/n02113023_6508.jpg'
    ]);

    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breeds/image/random');
            dogList.value.push(result.data.message);
        } catch (e) {
            alert(e);
        }
    }

    // 向外部提供
    return {
        dogList,
        getDog
    };
};