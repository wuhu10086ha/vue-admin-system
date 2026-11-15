import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: 'HomeFilled' }
      },
      {
        path: 'system/user',
        name: 'SystemUser',
        component: () => import('@/views/system/user.vue'),
        meta: { title: '用户管理', parent: '系统管理' }
      },
      {
        path: 'system/role',
        name: 'SystemRole',
        component: () => import('@/views/system/role.vue'),
        meta: { title: '角色管理', parent: '系统管理' }
      },
      {
        path: 'system/menu',
        name: 'SystemMenu',
        component: () => import('@/views/system/menu.vue'),
        meta: { title: '菜单管理', parent: '系统管理' }
      },
      {
        path: 'system/dept',
        name: 'SystemDept',
        component: () => import('@/views/system/dept.vue'),
        meta: { title: '部门管理', parent: '系统管理' }
      },
      {
        path: 'system/post',
        name: 'SystemPost',
        component: () => import('@/views/system/post.vue'),
        meta: { title: '岗位管理', parent: '系统管理' }
      },
      {
        path: 'system/dict',
        name: 'SystemDict',
        component: () => import('@/views/system/dict.vue'),
        meta: { title: '字典管理', parent: '系统管理' }
      },
      {
        path: 'system/param',
        name: 'SystemParam',
        component: () => import('@/views/system/param.vue'),
        meta: { title: '参数管理', parent: '系统管理' }
      },
      {
        path: 'tools/report',
        name: 'ToolsReport',
        component: () => import('@/views/tools/report.vue'),
        meta: { title: '报表管理', parent: '系统工具' }
      },
      {
        path: 'tools/log',
        name: 'ToolsLog',
        component: () => import('@/views/tools/log.vue'),
        meta: { title: '日志管理', parent: '系统工具' }
      },
      {
        path: 'tools/job',
        name: 'ToolsJob',
        component: () => import('@/views/tools/job.vue'),
        meta: { title: '定时任务', parent: '系统工具' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.title) {
    document.title = `${to.meta.title} - 码上俊后台管理系统`
  }
  if (to.path === '/login') {
    next()
  } else if (!userStore.isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
