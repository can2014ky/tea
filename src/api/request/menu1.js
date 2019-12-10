import instance from '@src/api/http';

// 特殊请求头情况的处理
// eslint-disable-next-line import/prefer-default-export
export const getBanner = (params = {}) => instance({
  url: '/banner/',
  method: 'get',
  params,
});
export const getMockList = (params = {}) => instance({
  url: '/mock/list/',
  method: 'get',
  params,
});
export const getMockDetail = (params = {}) => instance({
  url: '/mock/detail/',
  method: 'get',
  params,
});
