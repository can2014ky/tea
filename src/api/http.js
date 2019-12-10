import { Message } from 'element-ui';
import axios from 'axios';
// import qs from 'qs';
import { getToken, removeToken } from '@src/utils/auth';
import router from '@src/router/index';

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.paramsSerializer = params => qs.stringify(params, { indices: false });

const tip = (message, type = 'warning') => {
  Message({
    message,
    type,
  });
};
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath,
    },
  });
};
const errorHandle = (status, other) => {
  switch (status) {
    case 401:
      toLogin();
      break;
    case 403:
      tip('登录过期，请重新登录');
      removeToken();
      // eslint-disable-next-line no-case-declarations
      const timer = setTimeout(() => {
        toLogin();
        clearTimeout(timer);
      }, 1000);
      break;
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      tip(other);
  }
};

const defaultConfig = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60000,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
};

const instance = axios.create(defaultConfig);

// 请求拦截
instance.interceptors.request.use((config) => {
  const route = router.currentRoute;
  const isRequiresAuth = route.matched.some(record => record.meta.requiresAuth);
  const token = getToken() || '233'; // 暂时屏蔽！！！
  if (!isRequiresAuth) {
    return config;
  }
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = token;
  } else {
    toLogin();
    // eslint-disable-next-line prefer-promise-reject-errors
    Promise.reject('尚未登录');
  }
  return config;
},
(error) => {
  Promise.error(error);
});

// 响应拦截
instance.interceptors.response.use((response) => {
  if (response.status === 200) {
    return Promise.resolve(response.data);
  }
  return Promise.reject(response);
},
(error) => {
  const { response } = error;
  if (response) {
    errorHandle(response.status, response.data.message);
    return Promise.reject(response);
  }
  tip('请求超时！');
  return Promise.reject(error);
});

export default instance;
