<template>
    <div class="container-fluid">
        <b-card>
            <b-card-body>
                <b-form-input placeholder="id를 입력하세요" class="my-3" v-model="loginData.user_id"></b-form-input>
                <b-form-input placeholder="비밀번호를 입력하세요" type="password" v-model="loginData.user_pwd"></b-form-input>
            </b-card-body>
            <b-card-body>
                <b-button @click="login()"  class="mx-3"> 로그인 </b-button>
            </b-card-body>
        </b-card>
    </div>
</template>
<script lang="ts">
import { LoginModel } from '@/service/user/model/UserModel';
import Vue from 'vue'
const loginDataModel:LoginModel = {
    user_id: '',
    user_pwd:'',
}
export default Vue.extend({
    name: "Login",
    data() {
        return {
            loginData : loginDataModel           
        };
    },

    methods: {
        async login() {
            try {
                console.log(this.loginData);
                const res = await this.$store.dispatch("UserModule/login",  this.loginData);
                console.log(res);
                this.$router.replace('/board/list');
            } catch (error) {
                console.log(error);
            }
    },

    }
    
})
</script>