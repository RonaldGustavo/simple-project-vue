import { createRouter, createWebHashHistory } from 'vue-router';
import LoginPage from '../Pages/LoginPage.vue';
import HomePage from '../Pages/HomePage.vue';

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        name: 'login',
        path: '/login',
        component: LoginPage,
    },
    {
        name: 'home',
        path: '/home',
        component: HomePage,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home',
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    if (!token && to.path !== '/login') {
        next('/login');
    } else if (token && to.path === '/login') {
        next('/home');
    } else {
        next();
    }
});

export default router;
