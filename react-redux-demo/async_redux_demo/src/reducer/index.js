import {INCREMENT,DECREMENT,FETCH_BEGIN,FETCH_ERROR,FETCH_SUCCESS} from '../action_types'
import {searchUserName} from './searchReducer'

const initState = {count:0,isFetching:false,data:{}}

const counter = (state = initState,action)=>{
    console.log('action:',action);
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
export const allCounter = [
    {counter:counter},
    {searchUserName:searchUserName},
]
    

export {
    counter,
}
    


