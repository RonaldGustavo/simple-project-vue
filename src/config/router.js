import { createRouter, createWebHashHistory } from 'vue-router';
import LoginPage from '../Pages/LoginPage.vue';
import HomePage from '../Pages/HomePage.vue';


const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        name: 'login',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'home',
        path: '/home',
        component: HomePage
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
