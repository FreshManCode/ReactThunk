import React from 'react'
import './LearnSetState.scss'
import {Radio} from 'antd'
/**
 * setState 的工作流程探索
 */

export default class LearnSetState extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count:0,
        }
    }

    componentDidMount() {
        // 事件委托
        // 把多个子元素的同一类型的监听逻辑合并到父元素上通过一个监听函数来管理的行为
        document.getElementById('testAddEventListerUL').addEventListener('click',(e)=>{
            const clickText = e.target.innerHTML
            console.log('我实际上点击的内容是:',clickText);
        })
    }


    addOne = ()=>{
        console.log('addOne setState前的count:',this.state.count);
        this.setState({
            count:this.state.count + 1
        })
        console.log('addOne setState后的count:',this.state.count);
    }

    addThree = ()=>{
        console.log('addThree setState前的count:',this.state.count);
        this.setState({
            count:this.state.count + 1
        })
        this.setState({
            count:this.state.count + 1
        })
        this.setState({
            count:this.state.count + 1
        })
        console.log('addThree setState后的count:',this.state.count);
    }

    delayAddOne = ()=>{
        // React15 的时候,使用 setTimeout 会使setState变成同步更新,React16及其以后,setState
        // 被"Fiber"化
        setTimeout(() => {
            console.log('delayAddOne setState前的count:',this.state.count);
            this.setState({
                count:this.state.count - 1
            })
            console.log('delayAddOne setState后的count:',this.state.count);
        }, 0);

    }

    render() {
        return <div className='learnSetState'>
            <div className="buttonContainer">
                <button onClick={this.addOne} >增加1倍</button>
                <button onClick={this.addThree}>增加3倍</button>
                <button onClick={this.delayAddOne}>点我减少</button>
            </div>
            <div className='testDiv'>
                <div className="leftDiv">
                    121212
                </div>
                <div className="rightDiv">
                    <Radio>选择器</Radio>
                </div>
            </div>
            <ul id='testAddEventListerUL'>
                <li>我是1号</li>
                <li>我是2号</li>
                <li>我是3号</li>
                <li>我是4号</li>
                <li>我是5号</li>
                <li>我是6号</li>
                <li>我是7号</li>
                <li>我是8号</li>
                <li>我是9号</li>
                <li>我是10号</li>
            </ul>
        </div>
    }
}