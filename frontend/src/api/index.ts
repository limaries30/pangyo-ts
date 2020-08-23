import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance(url: string) {
  return axios.create({
    baseURL: `${url}`,
  });
}

// 액시오스 초기화 함수
function createInstanceWithAuth(url: string) {
  const instance = axios.create({
    baseURL: `${url}`,  //proxy : api
  });
  return setInterceptors(instance);
}

export const instance = createInstance('api');
export const api = createInstanceWithAuth('api');