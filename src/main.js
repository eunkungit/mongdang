import { createApp } from 'vue';
import App from './App.vue';
import WriterInfo from './views/WriterInfo.vue';
import TargetInfo from './views/TargetInfo.vue';
import LetterBox from './views/LetterBox.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/writer-info', component: WriterInfo },
  { path: '/target-info', component: TargetInfo },
  { path: '/letter-box', component: LetterBox },
  // 다른 라우트들도 필요하다면 추가.
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
