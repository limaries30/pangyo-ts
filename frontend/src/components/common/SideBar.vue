<template>
<div>
        <template v-if="$store.state.user.username!==''">
                  <button @click="showSignOut">로그아웃</button>
        </template>
        <template v-else>
            <button @click="showSignIn">로그인</button>
            <button @click="showSignUp">회원가입</button>
        </template>
</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import SignModal from '@/components/sign/SignModal.vue'
import {SignModalState,UserState} from '@/store'
import { TastyBurgerButton } from 'vue-tasty-burgers'


@Component({  
  components: {
    SignModal,
    TastyBurgerButton
  },
})
export default class SideBar extends Vue {
button_type= 'vortex'
showSignIn(): void
{
SignModalState.showSignIn()
}

showSignUp(): void
{
SignModalState.showSignUp()
}

showSignOut(): void
{
SignModalState.showSignOut()
}
}
</script>

<style>

</style>