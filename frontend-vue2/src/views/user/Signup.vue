<template>
  <div class="container-fluid">
    <b-card>
      <b-card-body>
        <b-form-input
          placeholder="id를 입력하세요"
          class="my-3"
          v-model="userData.user_id"
        ></b-form-input>
        <b-form-input
          placeholder="비밀번호를 입력하세요"
          type="password"
          v-model="userData.user_pwd"
        ></b-form-input>
        <b-form-input
          placeholder="확인을 위해 비밀번호를 한 번 더 입력하세요"
          type="password"
          v-model="passwordConfirm"
        ></b-form-input>
        <b-form-input
          placeholder="이름을 입력하세요"
          v-model="userData.user_name"
        ></b-form-input>
        <b-form-input
          placeholder="닉네임을 입력하세요"
          v-model="userData.nickname"
        ></b-form-input>
        <b-form-input
          placeholder="이메일을 입력하세요"
          v-model="userData.email"
        ></b-form-input>
      </b-card-body>
      <b-card-body>
        <b-button @click="login()" class="mx-3"> 회원가입 </b-button>
      </b-card-body>
    </b-card>
  </div>
</template>
<script lang="ts">
import { LoginModel } from '@/service/user/model/UserModel';
import Vue from 'vue';
const loginDataModel: LoginModel = {
  user_id: '',
  user_pwd: '',
};
export default Vue.extend({
  name: 'Login',
  data() {
    return {
      loginData: loginDataModel,
    };
  },

  methods: {
    async login() {
      try {
        console.log(this.loginData);
        const res = await this.$store.dispatch(
          'UserModule/login',
          this.loginData
        );
        console.log(res);
        this.$router.replace('/board/list');
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
