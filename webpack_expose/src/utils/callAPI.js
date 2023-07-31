import qs from 'qs'
import axios from 'axios';
import {showLoading, hideLoading} from './loading'

axios.defaults.withCredentials = true;

// 是否是本地的mock数据脚本启动
const isDevelopmnetMock = process.env.NODE_MYENV === 'development_mock' 

// 创建axios 实例
const service = axios.create({
    baseURL: isDevelopmnetMock ? '/api' : '', // api的base_url
    timeout: 30000 // 请求超时时间
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    const ajaxUrl = config.url
    // // 以下接口允许不检验token
    const filterUrl = [
      '/front/h5/log'
    ]
    // 以下接口 Content-Type = application/json
    const jsonUrl = [
      '/api/notice/qryCategory',
    ]
  
    // /*
    //   ！！！ 特别警示：
    //   在header头里增加任何信息时，请匆必衡量，是否加到下面的 【config.url.indexOf('markData/report/js/upload')<0】 条件里，否则所有埋点上报，均会失败
    // */
    if (jsonUrl.includes(ajaxUrl)) {
      config.headers['Content-Type'] = 'application/json'
      if (config.method === 'post') {
        config.data = JSON.stringify(config.data)
      }
    } else {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      if (config.method === 'post') {
        config.data = qs.stringify({
          ...config.data
        })
      }
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  })
  
  // 添加响应拦截器
  service.interceptors.response.use(function (response) {
    // -2001, "token校验异常",
    // -2002, "生成token异常",
    // -2003, "用户token过期",
    // -2004, "该token被登出",
    // -2005, "AES密钥失效，需重新协商",
    hideLoading();
    const responseCode = response.status
    if (responseCode === 200) {
        console.log('请求成功')
    }
    return response;
  }, function (error) {
    if (error.message.includes('timeout')) {
      console.log('请求超时哦')
      if (process.env.NODE_ENV != 'production') {
        console.log('接口请求超时')
      }
    }
    return Promise.reject(error)
  })
  
  /**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */
  export function get(url, params = {}) {
    console.log('【GET】url: ', url, ' params: ', params);
    return new Promise((resolve, reject) => {
      service.get(url, {params: params})
        .then(response => {
          if (response.data.head.code == '200') {
            resolve(response.data.body)
          } else {
            reject(response.data)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  
  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  export function post(url, data = {}) {
    console.log('【POST】url: ', url, ' params: ', data,'\nNODE_ENV:',process.env.NODE_ENV);
    return new Promise((resolve, reject) => {
      if (isDevelopmnetMock) {
        // 测试环境走mock数据
        service.get(url, data)
          .then(response => {
            if (response.data.head.code == '200') {
              resolve(response.data.body)
            } else {
              reject(response.data)
            }
          })
          .catch(err => {
            reject(err)
          })
      } else {
        service.post(url, data)
          .then(response => {
            if (response.data.head.code == '200') {
              resolve(response.data.body)
            } else {
              reject(response.data)
            }
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  }

  /**
   * 延迟发送get请求,模拟接口请求时长
   * @param {url}  请求URL
   * @param {data} 请求参数
   * @param {delayTime} 延迟时间:s,默认0.8s
   */
  export function deleyGet({url,data = {},delayTime=0.8}) {
    showLoading();
    console.log("deleyGet_begin:",url)
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(get(url,data));
            }, delayTime * 1000);
        })
  }