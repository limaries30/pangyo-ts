import {instance} from './index'
import {PostResp} from './types'

// 회원가입 API
function getPosts(): Promise<PostResp> {
    return instance.get('post');
  }


export {getPosts}
  