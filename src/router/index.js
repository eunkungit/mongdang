// router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import LetterBox from '@/views/LetterBox.vue';
import WriterInfo from '@/views/WriterInfo.vue'; 
import TargetInfo from '@/views/TargetInfo.vue';
import LetterArchive from '@/views/LetterArchive.vue';
import NewPage from '@/views/NewPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/letter-archive', component: LetterArchive },
  { path: '/writer-info', component: WriterInfo },
  { path: '/target-info', component: TargetInfo },
  { path: '/new-page', component: NewPage },
  { path: '/letter-box', component: LetterBox },
  // 다른 라우트들도 필요하다면 추가
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
