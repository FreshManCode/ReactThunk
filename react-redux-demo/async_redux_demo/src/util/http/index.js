
import Axios from './axios'

const http = {}
/**
 * GET
 * @param {*} url 
 * @param {*} data 
 * @param {*} isLoading true:使用遮罩层  false:不使用
 * @returns 
 */
 http.get = (url, data,dispatch,isLoading=true) => {
    return Axios({
        dispatch:dispatch,
        method: 'get',
        url: url,
        params: data,
        isLoading: isLoading,   // 特别强调！！！ 看下文
        headers: {
          "Content-Type": "application/json",
        },
      })
  };
  
  /**
   * POST
   * @param {*} url 
   * @param {*} data 
   * @param {*} isLoading true:使用遮罩层  false:不使用
   * @returns 
   */
  http.post = (url, data,dispatch, isLoading=true) => {
    return Axios({
        dispatch:dispatch,
        method: 'post',
        url: url,
        data: data,
        isLoading: isLoading,
        headers: {
          "Content-Type": "application/json",
        },
    })
  };
  

  export default http;