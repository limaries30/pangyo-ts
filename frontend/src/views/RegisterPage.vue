<template>
  <RegisterForm></RegisterForm>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import RegisterForm from '@/components/RegisterForm.vue';

@Component({  
  components: {
    RegisterForm
  },
})
export default class RegisterPage extends Vue{

}
</script>

<style>

</style>