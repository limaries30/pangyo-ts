import {
    VuexModule, Module,MutationAction
  } from 'vuex-module-decorators';
  import store from '@/store';
import { CurrentView } from '../models';
//   import {loginUser,registerUser} from '@/api/auth'
  
  @Module({
    namespaced: true,
    name: 'signModal',
  })
  export default class SignModalModule extends VuexModule{
    
    show = false;
    currentView = false

    @MutationAction({mutate: ['show','currentView'] })
    async showSignIn()
    {
        return {show:true,currentView:CurrentView.signIn}
        
    }

    @MutationAction({mutate: ['show','currentView'] })
    async showSignUp()
    {

        return {show:true,currentView:CurrentView.signUp}
        
    }

    @MutationAction({mutate: ['show','currentView'] })
    async showSignOut()
    {

        return {show:false,currentView:CurrentView.signUp}
        
    }
  }

  