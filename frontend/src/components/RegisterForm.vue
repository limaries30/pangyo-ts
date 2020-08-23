<template>
    <div class="Content">
    <div class="RegisterFormContainer">
      <form @submit.prevent="registerForm" class="RegisterForm">
        <div>
          <label class="RegisterForm__label" for="email">Email </label>
          <input class="RegisterForm__input" id="email" type="text" v-model="email" />
        </div>

        <div>
          <label class="RegisterForm__label" for="username">Username </label>
          <input class="RegisterForm__input" id="username" type="text" v-model="username" />
        </div>

        <div>
          <label class="RegisterForm__label" for="password">PASSWORD </label>
          <input class="RegisterForm__input" id="password" type="text" v-model="password"/>
        </div>
        <div class="RegisterForm_pcheckContainer">
          <label class="RegisterForm__label" for="password-check">PASSWORD CHECK </label>
          <input class="RegisterForm__input" id="password-check" type="text" v-model="passwordCheck" v-bind:class="{BlinkError:!isPasswordSame&&this.logMessage}" />
        </div>

        <button :disabled="!isEmailValid || !password " type="submit" class="RegisterForm__SubmitBtn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import {validateEmail} from '@/utils/validate'
import { getModule } from 'vuex-module-decorators';
import {UserState} from '@/store'

@Component
export default class RegisterForm extends Vue {
      username= '';
      email = ''
      password= '';
      passwordCheck=''
      // log
      logMessage=  '';
      show = false;

      get isEmailValid(){
          return validateEmail(this.email);
      }

      get isPasswordSame(){
        return this.passwordCheck===this.password
      }

    async registerForm() {
        try {
            // 비즈니스 로직
            if(!this.isPasswordSame)
            {
              this.logMessage = 'Password is not Same'
              return;
            }
            const userData = {
                username: this.username,
                email: this.email,
                password: this.password,
                token:''
            };
        
            await UserState.REGISTER(userData)
            this.$router.push('/main');
        } catch (error) {
            this.logMessage = error.response.data;
        } finally {
            this.initForm();
        }
        }

        initForm() {
        this.username = '';
        this.password = '';
        this.email = '';
        }
}
</script>

<style scoped lang="scss">
@keyframes blink-animation {
  to {
  border-color:red;
  }
}
@-webkit-keyframes blink-animation {
  to {
  border-color:red;
  }
}
.form input.BlinkError{
  animation:blink-animation 1s 5 0.3333s;
  -webkit-animation:blink-animation 1s 2 0.3333s;
}

.RegisterForm{
    background: lightgreen;
    width: 80%;
    margin: auto;
    margin-top: 1em;
    padding: 1em;

  .RegisterForm__label{
    font-family: 'Rowdies', cursive;
    display:block;
  }

  .RegisterForm__input{
    background:white;
    border:1px solid black;
  }

  .RegisterForm__SubmitBtn{
    margin-top:1em;
  }

}


</style>