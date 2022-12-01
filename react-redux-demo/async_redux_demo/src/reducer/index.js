import {INCREMENT,DECREMENT,FETCH_BEGIN,FETCH_ERROR,FETCH_SUCCESS} from '../action_types'
import {searchUserName} from './searchReducer'
import loadingObj from './loading'
import {combineReducers} from 'redux'

const initState = {count:0,isFetching:false,data:{}}

const counter = (state = initState,action)=>{
    console.log('index_action:',action,'state:',state,'action:',action);
    switch (action.type) {
        case INCREMENT:
            return Object.assign({},initState,{count:state.count + action.data})
        case DECREMENT:
            return Object.assign({},initState,{count:state.count - action.data})
        case FETCH_BEGIN:
            return {isFetching:true}
        case FETCH_ERROR:
            return {isFetching:false,error:action.error}
        case FETCH_SUCCESS:
            return {isFetching:false,data:action.res}
        default:
            return state
    }
}


// 导出所有的reducer
// 合并reducer,在创建store的时候需要用到
export const allCounter = combineReducers({
    counter,
    searchUserName,
    loadingObj,
})
   
export {
    counter,
}
    


