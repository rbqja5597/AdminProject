import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// 앱 컴포넌트 불러오기
import App from './App.vue'

// 전역 CSS 불러오기
import './index.css'

// 전역 컴포넌트 불러오기
import TitleBar from './components/TitleBar.vue';
import FormRow from './components/FormRow.vue';


// 페이지 불러오기

import MainPage from './pages/MainPage.vue'
import ArticleListPage from './pages/ArticleListPage.vue'


// 라우팅 정보 구성
const routes  = [
  { path: '/', component: MainPage },
  { path: '/article/list', component: ArticleListPage }
];

// 라우터 생성
const router = createRouter ({
  history: createWebHistory (),
  routes
})

// 앱 생성
const app = createApp(App)
 
// 전역 컴포넌트 등록
app.component('TitleBar', TitleBar);
app.component('FormRow', FormRow);


// 앱에 라우터 적용
app.use(router)

// 앱 표시
app.mount('#app')
