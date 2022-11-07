import React from 'react'
// 导入connect
import {connect} from 'react-redux'


// ComB 接收state
// 1.导入connect方法
// 2.利用connect对组件进行加强
// 3.ComB属于接收方,需要实现connect第一个参数
// 4.mapStateToProps里面的一个参数就是我们关心的 state
// 5.把这个state 进行return 才能在组件的内部获取到最新的数据
// 6.ComB 能否拿到数据,关键点 是 reducer
// 7.只有reducer 里面返回了新的state时候,我们才能获取到state

 class ComB extends React.Component{
    render(){
        const {count} = this.props
    return <div className='comb'>ComB::{count}</div>
    }

}

const mapStateToProps = (state)=>{
    console.log('state:',state);
    return state
}


export default connect(mapStateToProps)(ComB)

// B组件是接收方,要实现connect方法第一个参数