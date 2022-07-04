import MainLayoutVue from 'layouts/MainLayout.vue';
import NoticeLayoutVue from 'layouts/NoticeLayout.vue';

import IndexPageVue from 'pages/IndexPage.vue';
import ErrorNotFoundVue from 'pages/ErrorNotFound.vue';
import PersonMainVue from 'pages/PersonMain.vue';
import NoticePage from 'pages/NoticePage.vue';

const routes = [
  {
    path: '/',
    component: () => MainLayoutVue,
    children: [
      { path: '/', component: () => IndexPageVue },
      { path: '/board', component: () => PersonMainVue },
    ]
  },
  {
    path: '/notice',
    component: () => NoticeLayoutVue,
    children: [
      { path: '', component: () => NoticePage }
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
