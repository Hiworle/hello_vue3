/* 创建一个路由器，并暴露出去 */
import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import NewsDetail from "../../../../src/pages/NewsDetail.vue";

// 创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [ // 路由规则
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'news',
            path: '/news',
            component: News,
            children: [
                {
                    name: "detail",
                    path: 'detail/:id/:title/:content', // 此处不要加'/'
                    component: NewsDetail
                }
            ]
        },
        {
            name: 'about',
            path: '/about',
            component: About
        }
    ]
});

// 暴露路由
export default router;