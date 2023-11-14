<template>
    <div class="situation-container">
      <h1 class="title">상황 선택</h1>
      <div class="situations">
        <router-link to="/sebu-situ/help" class="situation-card">도움 받은 상황</router-link>
        <router-link to="/sebu-situ/thankful" class="situation-card">항상 감사함</router-link>
        <router-link to="/sebu-situ/grateful" class="situation-card">고마운 상황</router-link>
        <!-- 다른 상황들도 추가 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  .situation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .title {
    color: #4d004d; /* 보라색 */
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .situations {
    display: flex;
    gap: 20px;
  }
  
  .situation-card {
    background-color: #4d004d; /* 보라색 */
    color: #fff;
    font-size: 18px;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .situation-card:hover {
    background-color: #2d002d; /* 더 진한 보라색 */
  }
  </style>
  