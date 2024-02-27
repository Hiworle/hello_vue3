import {createRouter, createWebHistory} from "vue-router";
import Father from "@/pages/01props/Father.vue";

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/props',
                component: Father
            },
            {
                path: '/custom_event',
                component: () => {
                    return import('@/pages/02custom_event/Father.vue');
                }
            },
            {
                path: '/mitt',
                component: () => {
                    return import('@/pages/03mitt/Father.vue');
                },
            },
            {
                path: '/v-model',
                component: () => {
                    return import('@/pages/04v-model/Father.vue')
                }
            },
            {
                path: '/attrs',
                component: () => {
                    return import('@/pages/05attrs/GrandFather.vue')
                }
            },
            {
                path: '/refs_parents',
                component: () => {
                    return import('@/pages/06refs_parents/Father.vue')
                }
            },
            {
                path: '/provide_inject',
                component: () => {
                    return import('@/pages/07provide_inject/GrandFather.vue')
                }
            },
            {
                path: '/pinia',
                component: () => {
                    return import('@/pages/08pinia/Father.vue')
                }
            },
            {
                path: '/slot',
                component: () => {
                    return import('@/pages/09slot/Father.vue')
                }
            },
        ]
    }
);

export default router;