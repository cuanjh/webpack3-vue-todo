import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    // path: '/app/:id',
    props: true,
    // props: {
    //   id: '456'
    // },
    // props: (route) => ({ id: route.query.b }),
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'test'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    },
    component: Todo
    // component: () => import('../views/todo/todo.vue')
    // components: {
    //   default: Todo,
    //   a: Login
    // }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
    // component: () => import('../views/login/login.vue')
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
]
