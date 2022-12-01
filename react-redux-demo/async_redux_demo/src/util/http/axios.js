import axios from 'axios'
import { openLoading,closeLoading } from '../../actions/loading';

// 配合使用一个全局的loading

let Axios = axios.create({
    // timeout:30000,
})

// 计数器
let requestCount = 0;

function showLoading(dispatch) {
    // console.log("Axios:",Axios)
    if (requestCount === 0) {
        dispatch(openLoading());
    }
    requestCount ++;
}

function hideLoading(dispatch) {
    if (requestCount <= 0) {
        return;
    }
    requestCount --;
    if (requestCount === 0) {
        dispatch(closeLoading())
    }
}

// 删除isLoading 字段
function deleteLoading(obj) {
    let newObj = {...obj};
    delete newObj.isLoading;
    return newObj
}


// 请求拦截
Axios.interceptors.request.use(
    (config) => {
    //   console.log('Axios_config is:',config);
      if (config.isLoading !== false) {
        showLoading(config.dispatch);
      }
      return deleteLoading(config);
    },
    (error) => {
      if (error.isLoading !== false) {
        hideLoading();
      }
    //   message.error("请求超时");
         console.log("请求超时_请求超时")
      return Promise.reject(deleteLoading(error));
    }
  );

// 响应拦截
Axios.interceptors.response.use(
    (response) => {
      if (response.config.isLoading !== false) {
        hideLoading(response.config.dispatch);
      }
      let { data } = response;
      if (data.code === 0) {
        return data;
      }
    },
    (error) => {
    //   console.log('error_config:',error);
      if (!error.config ||error.config.isLoading !== false ) {
        setTimeout(() => {
            hideLoading(error.config.dispatch);
        }, 2000);
      }
    //   message.error("服务错误");
      console.log('服务错误_服务错误')
      return Promise.reject(error);
    }
  );
  
  export default Axios;
  