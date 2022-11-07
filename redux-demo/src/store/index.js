import {createStore} from 'redux'
// 导入自己创建的reduder
import {reducer} from '../reducer'

// 构建store
const store = createStore(reducer);

export default store;