import {createApp} from "vue";
import App from "@/App.vue";
// 引入 pinia
import {createPinia} from "pinia";
import router from "@/router";

const app = createApp(App);

// 创建一个 Pinia 实例
const pinia = createPinia();

// 安装 pinia
app.use(pinia);

// 使用路由
app.use(router);

app.mount("#app")