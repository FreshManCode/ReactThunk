import {get,post} from '../utils/callAPI'

export function getGoodsList() {
    return get('/goods/list')
}

export function getUserInfo(params) {
    return get('/user/info',params)
}