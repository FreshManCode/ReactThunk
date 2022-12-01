import {OPENLOADING,CLOSELOADING} from "../action_types/loading"
let initState = {
    loading:false,
}

export default function loadingReducer(state = initState,action) {
    let newObj = {...state}
    console.log('loadingReducer:',state,'action:',action);
    switch (action.type) {
        case OPENLOADING: 
            newObj.loading = true;
            return newObj;
            
        case CLOSELOADING: 
            newObj.loading = false;
            return newObj;
        
        default:
            return state
    }
}