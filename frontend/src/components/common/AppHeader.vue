<template>
 <header>
      <router-link to="/" class="logo">
      <div class="logo">
        Veggie World
        </div>
      </router-link>
            <div class="hamburgerContainer">
            <TastyBurgerButton :type='button_type' v-on:toggle="show_sidebar=!show_sidebar"/>
            </div>
            <transition name="sidebar">
            <SideBar v-if="show_sidebar" />
            </transition>

 </header>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import SignModal from '@/components/sign/SignModal.vue'
import SideBar from '@/components/common/SideBar.vue'
import {SignModalState,UserState} from '@/store'
import { TastyBurgerButton } from 'vue-tasty-burgers'



@Component({  
  components: {
    SignModal,
    TastyBurgerButton,
    SideBar
  },
})
export default class AppHeader extends Vue {
button_type= 'vortex'
show_sidebar= false
}
</script>

<style scoped>
.sidebar-enter{
  transform:translate(10px);
}

.hamburgerContainer{
  position:fixed;
  left: 85vw;
}


.username {
  color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color:mediumspringgreen;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 1.2rem;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.logout-button {
  font-size: 14px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}

</style>