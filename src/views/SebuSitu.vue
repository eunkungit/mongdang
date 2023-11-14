<template>
    <div class="sebu-situ-container">
      <h1 class="title">세부 상황 선택</h1>
      <form @submit.prevent="submitDetails">
        <div class="form-group">
          <label for="details">세부 상황</label>
          <input type="text" id="details" v-model="details" required>
        </div>
  
        <!-- 이전 페이지로 가는 버튼 -->
        <router-link to="/situation" class="nav-button prev-button">이전</router-link>
  
        <!-- 다음 페이지로 가는 버튼 -->
        <router-link to="/letter-preview" class="nav-button next-button">다음</router-link>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        details: '',
      };
    },
    methods: {
      submitDetails() {
        // 세부 상황을 제출하는 로직 추가
        // ...
      },
    },
  };
  </script>
  
  <style scoped>
  .sebu-situ-container {
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
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-size: 16px;
    margin-bottom: 5px;
    display: block;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .nav-button {
    background-color: #4d004d; /* 보라색 */
    color: #fff;
    font-size: 14px;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    margin-top: 20px;
    display: inline-block;
    transition: background-color 0.3s;
  }
  
  .prev-button {
    margin-right: 10px;
  }
  
  .nav-button:hover {
    background-color: #2d002d; /* 더 진한 보라색 */
  }
  </style>
  