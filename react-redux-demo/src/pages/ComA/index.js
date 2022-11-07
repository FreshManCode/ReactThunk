import React from 'react'
// 导入connect
import {connect} from 'react-redux'

// ComA 发送action
// 1.导入connect

// 2.利用对connect 对组件进行加强
//   connect(要接收数据的函数,要发送action的函数)(放入要加强的组件)

// 3.实现connect 第二个参数

// 4.构建一个函数mapDispatchToProps(dispatch)
//   dispatch:就是用来发送action的

// 5.在这个函数里面就可以返回一个对象
//   key:方法名
//   value:调用dispatch去发送action

// 6.在组件的内部 就可以通过this.props来获取这个方法


 class ComA extends React.Component{

    handleClick=()=>{
        console.log('click:',this.props);
        // 通过this.props 调用,发送action
        this.props.sendAction();
    }


    render(){
        return <div className='coma'><button onClick={this.handleClick}>+</button></div>
    }
}

/**
 * 函数要有一个返回值,返回值是一个对象
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch)=>{
    // 返回值是一个对象
    return {
        sendAction:()=>{
            // 利用dispatch 发送一个action
            // 传递action对象,需要定义一个type属性
            dispatch({
                type:"add_action"
            })
        }

    }
}


// A 是发送方,所以要实现connect 第二个参数
// connect 函数返回值是加强之后的组件
export default connect(null,mapDispatchToProps)(ComA)