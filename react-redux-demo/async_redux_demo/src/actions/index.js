import {INCREMENT,DECREMENT,FETCH_BEGIN,FETCH_ERROR,FETCH_SUCCESS} from '../action_types'

const getFaceIDTokenURL = 'https://id2.hisign.com.cn:9001/hisp/tech/ivLive/fetchToken'
const getFaceIDResultURL = 'https://id2.hisign.com.cn:9001/hisp/tech/ivLive/fetchToken'
const params = {
    "appId": "92e767f5d4f64817b153e894eebc08ed",
    "appKey": "NzgyMTA4MjY=",
    "returnUrl": "http://10.65.105.3:3000?token={token}&result={result}",
    "custom": {
        "title": "新浪支付Test."
    }
}

const FetchPOST = (URL,params={},dispatch,successCB,errorCB)=>{
    dispatch(sendFetchAction())
    return fetch(URL,{
        method:'post',
        headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-type':'application/json'
        },
        body:JSON.stringify(params)
    }).then(res=>{
        console.log('res is:',res);
        return res.json()
    }).then(data=>{
        console.log('data is:',data);
        successCB && successCB (data)
        dispatch(sendFetchSuccess(data))
    }).catch(error=>{
        console.log('error is:',error);
        errorCB && errorCB(error)
        dispatch(sendFetchError(error))
    })
}



const incrementCreator = (number)=>{
    return {type:INCREMENT,data:number}
}
const decrementCreator = (number)=>{
    return {type:DECREMENT,data:number}
}

const incrementAsync = (number)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(incrementCreator(number))
        }, 1000);
    }
}


const sendFetchAction = ()=>{
    return {type:FETCH_BEGIN}
}

const sendFetchError = (error)=>{
    return {type:FETCH_ERROR,error}
}

const sendFetchSuccess = (res)=>{
    return {type:FETCH_SUCCESS,res}
}


const requestTestFaceIDToken = (successCB,errorCB)=>{
    return (dispatch)=>{
        FetchPOST(getFaceIDTokenURL,params,dispatch,successCB,errorCB)
    }
}


const requestFaceIDResult = (reqParams,successCB,errorCB)=>{
    return (dispatch)=>{
        FetchPOST(getFaceIDTokenURL,reqParams,dispatch,successCB,errorCB)
    }
}

export {
    incrementCreator,
    decrementCreator,
    incrementAsync,
    requestTestFaceIDToken,
    requestFaceIDResult
}