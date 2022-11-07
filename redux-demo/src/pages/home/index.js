import React from 'react'
// 导入store
import store from '../../store'

// 导入action
import {sendAction} from '../../action'


export default class Home extends React.Component{

    handleClick = ()=>{
        store.dispatch(sendAction())
    }

    // 当组件加载完毕的时候来监听
    componentDidMount() {
        store.subscribe(()=>{
            console.log('subscribe:',store.getState());
            this.setState({})
        })
    }


    render(){
        return (
            <>
                <button onClick={this.handleClick}>点我发送一个action</button>
                <div>{store.getState().value}</div>
            </>
        )
    }
}