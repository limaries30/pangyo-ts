<template>
    <div class="FormContainer">
      <form @submit.prevent="submitForm" class="LoginForm">
        <div>
          <label class="LoginForm__label" for="email">Email</label>
          <input class="LoginForm__input" id="email" type="text" v-model="email" />
          <p class="validation-text">
            <span class="warning" v-if="!isEmailValid && email">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label class="LoginForm__label" for="password">PW</label>
          <input class="LoginForm__input" id="password" type="text" v-model="password" />
        </div>
        <button
          :disabled="!isEmailValid || !password"
          type="submit"
          class="btn"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import {validateEmail} from '@/utils/validate'
import { getModule } from 'vuex-module-decorators';
import {UserState} from '@/store'

@Component
export default class LoginForm extends Vue {
      email= '';
      password= '';
      // log
      logMessage=  '';

      get isEmailValid(){
          return validateEmail(this.email);
      }

        async submitForm() {
        try {
            // 비즈니스 로직
            const userData = {
              email: this.email,
              password: this.password,
              username:'',
              token:''
            };
            await UserState.LOGIN(userData)
            this.$router.push('/main');
        } catch (error) {
            // 에러 핸들링할 코드
            console.log(error.response.data);
            this.logMessage = error.response.data;
        } finally {
            this.initForm();
        }
        }

        initForm() {
        this.email = '';
        this.password = '';
        }
}
</script>

<style scoped>

.FormContainer{
    background: lightgreen;
    width: 80%;
    margin: auto;
    margin-top: 1em;
    padding: 1em;
}

.LoginForm__label{
font-family: 'Rowdies', cursive;
display:block;
}
.LoginForm__input{
background:white;
border:1px solid black;
margin-bottom:1em;
}

.btn {
  color: white;
}
</style>
