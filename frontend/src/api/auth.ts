// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from './index';
import {UserState} from '@/store/user/models'

// 회원가입 API
function registerUser(userData: UserState) {
  console.log(userData)
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData: UserState) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
