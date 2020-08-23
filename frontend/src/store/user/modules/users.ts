import {
    VuexModule, Module, getModule, Mutation,MutationAction
  } from 'vuex-module-decorators';
  import store from '@/store';
  import { UserState } from '@/store/user/models';
  import {loginUser,registerUser} from '@/api/auth'
  
  @Module({
    namespaced: true,
    name: 'user',
  })
  export default class UserModule extends VuexModule{
    
    username ='';
    email = '';
    password = '';
    token = '';

    @MutationAction({mutate: ['token'] })
    async LOGIN(userData: UserState)
    {
        const {data} = await loginUser(userData);
        return {token:data.token}
        
    }

    @MutationAction({mutate: ['token'] })
    async REGISTER(userData: UserState)
    {
        const {data} = await registerUser(userData);
        return {token:data.token}
        
    }

    @MutationAction({mutate: ['username'] })
    async clearUsername()
    {
        return {username:''}
    }

    get isLogin()
    {
      return this.token!==''
    }

  }

  