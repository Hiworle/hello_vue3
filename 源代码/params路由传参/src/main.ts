import {createApp} from "vue";
import App from "@/App.vue";
import router from '@/router';

// 创建一个 Vue 应用实例
const app = createApp(App);

// 使用路由
app.use(router);

// 挂载到根元素上
app.mount("#app")