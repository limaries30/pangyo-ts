<template>
  <LoginForm></LoginForm>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import LoginForm from '@/components/LoginForm.vue'

@Component({  
  components: {
    LoginForm
  },
})
export default class LoginPage extends Vue{

}
</script>

<style>

</style>