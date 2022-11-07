import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {counter} from '../reducer'

// export default createStore(counter)

// 使用redux-thunk 中间件之后,可以进行异步的reducer处理了
const store = createStore(
    counter,
    // 使用异步的中间件
    // 内部会自动进行第一次调用reducer函数得到最初的state
    applyMiddleware(thunk)
)
export default store