import React from 'react'
import './index.scss'
import {objctData,userInfo} from './mockData'
import {Button} from 'antd'
import SubChild from './SubChild'
const PubSub = require('pubsub-js')

// myEvent 提前初始化并挂载在windows上的
const myEvent = window.myEvent;

class MockJS extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name:"test",
            age:"libai",
            showText:'',
        }
    }

    componentDidMount() {
        this.initEmitOn();
    }

   


    // 监听test 事件
    initEmitOn = ()=> {
        console.log('initEmitOn_initEmitOn');
        // 编写简单的handler 
        const testHandler = (params)=>{
            console.log(`testHandler 事件被触发了,testHandler收到的入参是${params}`);
        }
        // 监听test事件
        myEvent.on("test",(params)=>{
            console.log('myEvent_on:',params);
        })
    }
    
    
    


    // 需要一个对象格式的返回值 这是一个静态方法
    static getDerivedStateFromProps(props,state) {
        console.log('super_getDerivedStateFromProps',props);
        return null
    }

    testMockJS1 = ()=>{
        this.setState({
            showText:JSON.stringify(objctData)
        })
        console.log('objctData:',objctData,'jsonData:',JSON.stringify(objctData));
    }

    testMockJS2 = ()=>{
        this.setState({
            showText:JSON.stringify(userInfo)
        })
        console.log('userInfo:',userInfo,'jsonData:',JSON.stringify(userInfo));
    }

    coptTest = ()=>{
            var link = "https://blog.csdn.net/FreshManCode/article/details/116498154?spm=1001.2014.3001.5502" ;
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', link);
            input.select();
            if (document.execCommand('copy')) {
                document.execCommand('copy');
                alert('复制链接成功')
            }
            document.body.removeChild(input);

    }


    render() {
        return <div className='MockJS'>
                <h3>MockJS测试</h3>
                <div className='contentWrapper'>
                    <Button className='button' onClick={this.testMockJS1}>测试MockJS1</Button>
                    <Button className='button' onClick={this.testMockJS2}>测试MockJS2</Button>
                    <Button className="button" onClick={this.coptTest}>copy</Button>
                    
                </div>
               <ShowTextChild showText={this.state.showText}></ShowTextChild>
               <EventChild/>
        </div>
    }
}
export default MockJS;


class ShowTextChild extends React.Component{

    componentDidMount() {
        let that = this
        myEvent.on("subChildSendEvent",function(params){
            console.log('hahahah',typeof(params),params);
            
            if(params &&  typeof(params) === 'string') {
                that.setState({
                    receiveText:params,
                })
            }
            console.log('receive_subChildSendEvent',params);
        })

        PubSub.subscribe('start_time_down',(msg,data)=>{
            console.log('receive_start_time_down',data,'msg:',msg)
            this.setState({
                pubsubJSText:data,
            })
        });
    }
    

    constructor(props) {
        super(props)
        this.state = {
            newText:"我想去桂林",
            receiveText:"",
            //  pubsub_js 发布订阅模式
            pubsubJSText:"",
        }
    }

    static getDerivedStateFromProps(props,state) {
        console.log('getDerivedStateFromProps:',props,'\nstate:',state)
        const text = props.showText ? props.showText : ''
        return {
            showText:text,
            newText:text.length > 2 ? text.slice(0,text.length/2) : '我想去桂林'
        }
        
    }



    // 替代  componentWillUpdate
    getSnapshotBeforeUpdate(preProps,preState) {
        console.log('getSnapshotBeforeUpdate')
        return "哈哈"

    }

    componentWillUnmount() {
        PubSub.unsubscribe('start_time_down',(msg,data)=>{
            console.log('移除监听_start_time_down','msg:',msg,'data:',data);
        })
        console.log('ShowTextChild_componentWillUnmount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render(){
        const {showText} = this.props
        return <div className="showTextChildWrapper">
            {showText}
            <p>
                {this.state.newText}
            </p>
            <p>
                我使用<i>Event</i>接收到的传递参数是:<span>{this.state.receiveText}</span>
            </p>
            <p>
                我使用<i>pubsub_js</i>插件接收到的传递参数是:<span>{this.state.pubsubJSText}</span>
            </p>
        </div>
    }
}


class EventChild extends React.Component {

    sendEvent = ()=>{
        console.log('sendEvent_sendEvent');
        myEvent.emit("test","我是从子组件发送过去的哈哈哈")
    }
    render() {
        return <div className="eventChild">
            <Button className="redButton" onClick={this.sendEvent}>
                子组件使用EventEmitter发送
            </Button>
            <SubChild/>

        </div>
    }
}