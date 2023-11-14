<template>
  <div v-if="!showAppContent" class="writer-info-container">
    <img class="logo" src="@/assets/mong_logo.png" alt="로고" style="width: 700px; height: 400px;" />
    
    <div class="form-container">
      <div class="form-group">
        <label for="name" class="label">이름</label>
        <input type="text" id="name" v-model="name" placeholder="이름을 입력하세요" class="input" />
      </div>
      <div class="form-group">
        <label for="age" class="label">나이</label>
        <input type="number" id="age" v-model="age" placeholder="나이를 입력하세요" class="input" />
      </div>
      <div class="form-group">
        <label class="label">성별</label>
        <div class="gender-radio">
          <label for="male" class="gender-label">남자</label>
          <input type="radio" id="male" v-model="gender" value="male" class="radio" />
          <label for="female" class="gender-label">여자</label>
          <input type="radio" id="female" v-model="gender" value="female" class="radio" />
        </div>
      </div>
    </div>
    <button class="next-button" @click="goToNextPage">다음으로</button>
  </div>
  <router-view v-else></router-view>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: null,
      gender: '',
    };
  },
  methods: {
    goToNextPage() {
      this.showAppContent = true;
      this.$router.push('/target-info');
    }
  },
};
</script>

<style scoped>
.writer-info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.logo {
  margin-bottom: 20px;
  max-width: 100%;
  height: auto;
}

.form-container {
  width: 80%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 20px;
}

.label {
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
  color: #4d004d; /* 보라색 */
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #4d004d; /* 보라색 */
  border-radius: 5px;
  font-size: 16px;
}

.gender-radio {
  display: flex;
  gap: 10px;
}

.gender-label {
  margin-right: 5px;
  color: #4d004d; /* 보라색 */
}

.radio {
  color: #4d004d; /* 보라색 */
}

.next-button {
  background-color: #4d004d; /* 보라색 */
  color: #fff;
  font-size: 14px;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
