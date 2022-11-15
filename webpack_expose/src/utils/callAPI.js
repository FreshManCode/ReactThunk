import qs from 'qs'
import axios from 'axios';

axios.defaults.withCredentials = true;

// 发送时
axios.interceptors.request.use(
    (config)=>config,
    (error)=>Promise.reject(error)
);

// 响应时
axios.interceptors.response.use(
    (response)=>response,
    (error)=>Promise.resolve(error.response)
);

const checkStatus = (res)=>{
    if (res.status == 200 || res.status == 304) {
        return res.data
    }
    return {
        code:0,
        msg:res.statusText,
        data:res.statusText
    }
}

const checkCode = (res)=>{
    if (res.code == 0) {
        throw new Error(res.ms)
    }
    return res;
}

const prefix = "/api";
const get = (url, params) => {
    return axios({
      method: 'get',
      url: prefix + url,
      params,
      timeout: 30000,
    })
      .then(checkStatus)
      .then(checkCode);
  };
  
  const post = (url, data) => {
    return axios({
      method: 'get',
      url: prefix + url,
      data: qs.stringify(data),
      timeout: 30000,
    })
      .then(checkStatus)
      .then(checkCode);
};
  
export {
    get,
    post,
};
  