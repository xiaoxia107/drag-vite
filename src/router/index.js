import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'
import H5EditorRouter from './modules/H5EditorRouter'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/h5Editor'
    },
    H5EditorRouter
]

const router = new VueRouter({
    mode: '',
    base: '',
    routes
})

export default router
