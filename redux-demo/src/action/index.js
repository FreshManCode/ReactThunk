/**
 * action的构建函数
 */
const sendAction = ()=>{
    // 需要返回一个action 对象
    return {
        type:"send_type",
        value:"我是一个action",
    }
}

module.exports = {
    sendAction,
}