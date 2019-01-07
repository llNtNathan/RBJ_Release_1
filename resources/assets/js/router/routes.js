
export default ({ authGuard, guestGuard }) => [
  {
    path: '/',
    name: 'Home',
    component: require('../layouts/Home/Home.vue')
  },
  { path: '*', redirect: '/' }
]
