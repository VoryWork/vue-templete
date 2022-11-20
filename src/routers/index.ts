import { createRouter ,createWebHistory } from 'vue-router';
import HomeView from '../views/Home/index.vue'
export default createRouter(
    {
        history:createWebHistory(),
        routes:[
            {
                path:'/',
                component:HomeView
            }
        ]
    }
);