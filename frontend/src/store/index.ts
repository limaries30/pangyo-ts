import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from '@/store/user/modules/users'
import SignModalModule from '@/store/signModal/modules/signModal'
import { getModule } from 'vuex-module-decorators';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['user','signModal'],
});


const store = new Vuex.Store({
  modules:{
    user:UserModule,
    signModal:SignModalModule
  },
  plugins: [vuexLocal.plugin],
})


export const UserState = getModule(UserModule, store);
export const SignModalState = getModule(SignModalModule,store)
export default store;