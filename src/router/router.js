import Main from '@/pages/main.vue';
import Projects from '@/pages/projects.vue';
import About from '@/pages/about.vue';
import Contact from '@/pages/contact.vue';
import {createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: Main },
    { path: '/projects', component: Projects },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
    ];

const router = createRouter({routes, history:createWebHistory()});

export default router;