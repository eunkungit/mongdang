<!-- LetterBox.vue -->
<template>
    <div class="letter-box-container">
      <div class="top-bar">
        <img class="logo" src = "@/assets/mong_logo.png" alt="로고" style="width: 700px; height: 400px;" />
      </div>
      <div class="letter-section">
        <h2>작성한 편지</h2>
        <!-- 작성한 편지 목록이나 UI를 추가하세요. -->
      </div>
      <div class="letter-section">
        <h2>받은 편지</h2>
        <!-- 받은 편지 목록이나 UI를 추가하세요. -->
      </div>
    </div>
  </template>
  
  <style>
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4eafa;
  }
  
  .letter-box-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .top-bar {
    background-color: #7c43a3;
    padding: 15px;
    text-align: center;
    color: #fff;
  }
  
  .logo {
    max-width: 100%;
    height: auto;
  }
  
  .letter-section {
    margin: 20px;
  }
  
  h2 {
    font-size: 1.5rem;
    color: #7c43a3;
  }
  </style>
  