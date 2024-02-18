/* 创建一个路由器，并暴露出去 */
import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import NewsDetail from "@/pages/NewsDetail.vue";

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
                    component: NewsDetail,

                    // 第一种写法，将路由收到的所有 params 参数都传递给 NewsDetail 组件
                    // 不支持 query 参数
                    // props: true,

                    // 第二种写法，可以自己决定将哪些参数传递给 NewsDetail 组件
                    props: (route) => {
                        return route.params;
                    }

                    // // 第三种写法，对象形式（用得少）
                    // props: {
                    //     id: '123',
                    //     title: 'title',
                    //     content: 'content'
                    // }
                }
            ]
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
});

// 暴露路由
export default router;