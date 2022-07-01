import MainLayoutVue from 'layouts/MainLayout.vue';

import IndexPageVue from 'pages/IndexPage.vue';
import ErrorNotFoundVue from 'pages/ErrorNotFound.vue';
import PersonMainVue from 'src/pages/PersonMain.vue';

const routes = [
  {
    path: '/',
    component: () => MainLayoutVue,
    children: [
      { path: '', component: () => IndexPageVue }
    ]
  },
  {
    path: '/person',
    component: () => MainLayoutVue,
    children: [
      { path: '', component: () => PersonMainVue }
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
