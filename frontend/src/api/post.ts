import {instance} from './index'

// 회원가입 API
function getPosts() {
    return instance.get('getPost');
  }


export {getPosts}
  