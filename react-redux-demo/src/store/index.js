import {createStore} from 'redux'
// 导入自己的reducer
import {reducer} from '../reducer'

export default createStore(reducer)