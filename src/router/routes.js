const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: '', redirect: '/user' },
      { path: '/user', component: () => import('pages/PageUsers.vue') },
      { path: '/chat', component: () => import('pages/PageChat.vue') },
      { path: '/auth', component: () => import('pages/PageAuth.vue') },
      { path: '/login', name: 'Login' , component: () => import('pages/PageLogin.vue') },
      { path: '/account', component: () => import('pages/PageAccount.vue') },
      {
        path: '/contect',
        name: '채팅리스트',
        icon: 'las la-question-circle',
        component: () => import('pages/PageContect.vue'),
        children: [
          {
            path: '/contect/chat',
            component: () => import('pages/PageChat.vue'),
          }
        ]
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
