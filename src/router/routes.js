import MainLayoutVue from 'layouts/MainLayout.vue';

import IndexPageVue from 'pages/IndexPage.vue';
import ErrorNotFoundVue from 'pages/ErrorNotFound.vue';

const routes = [
  {
    path: '/',
    component: () => MainLayoutVue,
    children: [
      { path: '', component: () => IndexPageVue }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => ErrorNotFoundVue
  }
];

export default routes;
