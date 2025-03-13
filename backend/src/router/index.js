import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import AppLayout from "../components/AppLayout.vue";

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta: {
            requiresAuth: false
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
        ] 
    },
    {
        path: '/request-password',
        name: 'requestpassword',
        component: RequestPassword
    },
    {
        path: '/request-password',
        name: 'requestpassword',
        component: RequestPassword
    },
    {
        path: '/reset-password',
        name: 'resetpassword',
        component: ResetPassword
    },
 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;