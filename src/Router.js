import {createRouter, createWebHistory} from 'vue-router'

import CochesComponent from './components/CochesComponent.vue'
import DetalleCoche from './components/DetalleCoche.vue'
import InsertCoche from './components/InsertCoche.vue'
import DeleteCoche from './components/DeleteCoche.vue'
import UpdateCoche from './components/UpdateCoche.vue'

const myRoutes = [
    {
        path: "/", component: CochesComponent
    },
    {
        path: "/detalle/:id", component: DetalleCoche
    },
    {
        path: "/crear", component: InsertCoche
    },
    {
        path: "/delete/:id", component: DeleteCoche
    },
    {
        path: "/update/:id", component: UpdateCoche
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;
