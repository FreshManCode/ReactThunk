import {SEARCH_USERNAME} from '../action_types/search'
import {INCREMENT,DECREMENT,FETCH_BEGIN,FETCH_ERROR,FETCH_SUCCESS} from '../action_types'

const initState = {isFetching:false,data:{}}

export const searchUserName = (state = initState,action)=> {
    console.log('search_action:',action);
    switch (action.type) {
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

