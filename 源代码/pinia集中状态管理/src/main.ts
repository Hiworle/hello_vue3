import {createApp} from "vue";
import App from "@/App.vue";
// 引入 pinia
import {createPinia} from "pinia";

const app = createApp(App);

// 创建一个 Pinia 实例
const pinia = createPinia();

// 安装 pinia
app.use(pinia);

app.mount("#app")