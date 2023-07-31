import {get,post,deleyGet} from '../utils/callAPI'
import userStore from '../store/user'

export function getGoodsList() {
    return get('/goods/list')
}

export function getUserInfo(params) {
    return get('/user/info',params)
}

export function getMyList() {
    return deleyGet({url:'/goods/list',delayTime:1.5})
}

export function myLogin() {
    return deleyGet({url:'/user/login',delayTime:1.5})
}

export function memberInfo() {
    return deleyGet({url:'/user/login',delayTime:1.0}).then(res=>{
        console.log('res:',res)
        userStore.updateUserInfo(res.data)
    }).catch(error=>{
        
    })
}

