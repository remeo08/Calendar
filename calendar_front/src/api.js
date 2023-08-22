import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://port-0-calendar-backend-ac2nll4pdsc1.sel3.cloudtype.app', //장고 서버 주소
  withCredentials: true, // 쿠키를 포함시키기 위한 설정 추가
});

export default instance;
