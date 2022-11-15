import {FetchGet} from './index'


const requestUserSearch = (reqParams,successCB,errorCB)=>{
    console.log('requestUserSearch:',reqParams);
    return (dispatch)=>{
        FetchGet('user/search',reqParams,dispatch,successCB,errorCB)
    }
}

export {
    requestUserSearch
}