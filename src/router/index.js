import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import Crew from '../views/Crew.vue'
import Technology from '../views/Technology.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { transition: 'slide' },
    },
    {
        path: '/destination',
        name: 'destination',
        component: Destination,
        meta: { transition: 'slide' },
    },
    {
        path: '/crew',
        name: 'crew',
        component: Crew,
        meta: { transition: 'slide' },
    },
    {
        path: '/technology',
        name: 'technology',
        component: Technology,
        meta: { transition: 'slide' },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
