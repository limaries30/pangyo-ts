import {instance} from './index'

export interface Post{
    url: string;
    titile: string;
}

// 회원가입 API
function getPosts(): Post[] {
    return instance.get('post');
  }


export {getPosts}
  