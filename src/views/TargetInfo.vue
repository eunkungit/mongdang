<template>
    <div class="target-info-container">
      <h1 class="title">받는 이 정보 입력</h1>
      <form @submit.prevent="submitInfo">
        <div class="form-group">
          <label for="name">이름</label>
          <input type="text" id="name" v-model="name" required>
        </div>
  
        <div class="form-group">
          <label for="age">나이</label>
          <input type="number" id="age" v-model="age" required>
        </div>
  
        <div class="form-group">
          <label>성별</label>
          <div class="gender-radio">
            <input type="radio" id="male" value="남자" v-model="gender">
            <label for="male">남자</label>
            <input type="radio" id="female" value="여자" v-model="gender">
            <label for="female">여자</label>
          </div>
        </div>
  
        <div class="form-group">
          <label for="relationship">작성자와의 관계</label>
          <select id="relationship" v-model="relationship" required>
            <option value="가족">가족</option>
            <option value="친구">친구</option>
            <option value="연인">연인</option>
            <option value="나">나</option>
            <option value="직장동료">직장동료</option>
          </select>
        </div>
  
        <!-- 이전 페이지로 가는 버튼 -->
        <router-link to="/writer-info" class="nav-button prev-button">이전</router-link>
  
        <!-- 다음 페이지로 가는 버튼 -->
        <router-link to="/situation" class="nav-button next-button">다음</router-link>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        age: null,
        gender: '',
        relationship: '가족', // 기본값 설정
      };
    },
    methods: {
      submitInfo() {
        // 제출 버튼이 눌렸을 때 처리
        // ...
      },
    },
  };
  </script>
  
  <style scoped>
  .target-info-container {
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
  
  input, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .gender-radio {
    display: flex;
    gap: 10px;
    align-items: center;
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
  