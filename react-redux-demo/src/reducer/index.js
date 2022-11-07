/**
 * 两个参数
 * state 
 * action
 */
const initState = {
    count:0,
}


exports.reducer = (state = initState,action)=>{
    console.log('reducer:',action);
    // 改造reducer,接收action 进行逻辑处理
    // 判断发送过来的action,是否我们需要的
    switch (action.type) {
        case "add_action" :
            return {
                count:state.count + 1
            }
            
        default:
            return state
    }
    
}