import Layout from '@/layout/index'

const H5EditorRouter = {
    path: '/h5Editor',
    component: Layout,
    redirect: '/H5EditorEdit',
    children: [
        {
            path: '/h5EditorList',
            component: () => import('@/views/H5Editor/H5EditorList.vue'),
            name: 'h5EditorList',
            meta: {
                title: 'H5编辑器列表',
                icon: '5gMsg',
                affix: true,
                type: 1,
            },
        },
        {
            path: '/H5EditorEdit',
            component: () => import('@/views/H5Editor/H5EditorEdit/H5EditorEdit.vue'),
            name: 'H5EditorEdit',
            meta: {
                title: 'H5编辑器',
                icon: '5gMsg',
                affix: true,
                type: 1,
            },
        }
    ]
}

export default H5EditorRouter
