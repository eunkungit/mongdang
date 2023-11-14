<template>
  <div class="app-container">
    <router-link to="/letter-box" class="main-button">편지보관함</router-link>
    <div class="center-container">
      <img class="logo" src="@/assets/mong_logo.png" alt="로고" style="width: 550px; height: 300px;" />
      <div class="button-container">
        <router-link to="/writer-info" class="main-button">편지쓰기</router-link>
        <div class="auth-buttons">
          <button class="secondary-button">로그인</button>
          <button class="secondary-button">회원가입</button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>


<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f4eafa;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top-bar {
  padding: 15px;
  text-align: center;
  color: #fff;
}

.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.logo {
  margin: 20px 0;
  max-width: 100%;
  height: auto;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.main-button,
.secondary-button {
  width: 90%; 
  margin: 10px 0;
  padding: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.main-button {
  background-color: #8f4ba9;
  color: #fff;
}

.secondary-button {
  background-color: #c4a7cc;
  color: #fff;
}
</style>
