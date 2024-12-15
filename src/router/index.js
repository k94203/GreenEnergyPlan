import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";

import Introduction_Goal from "@/views/Introduction/GoalView.vue"; //計畫目標
import Introduction_Teacher from "@/views/Introduction/TeacherView.vue"; //師資培育
import Introduction_Students from "@/views/Introduction/StudentsView.vue"; //學生培育

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/introduction/goal",
        name: "Goal",
        component: Introduction_Goal,
    },

    {
        path: "/introduction/teacher",
        name: "Teacher",
        component: Introduction_Teacher,
    },

    {
        path: "/introduction/students",
        name: "Students",
        component: Introduction_Students,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
