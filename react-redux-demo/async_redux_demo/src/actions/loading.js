import {OPENLOADING,CLOSELOADING} from '../action_types/loading'

export const openLoading = ()=>{
    return {type:OPENLOADING}
}

export const closeLoading = ()=>{
    return {type:CLOSELOADING}
}