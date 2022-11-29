import React from 'react'
import {Button} from 'antd'
import './index.scss'
const PubSub = require('pubsub-js')

const myEvent = window.myEvent

class SubChild extends React.Component {

    subChildSendEvent = ()=>{
        console.log('subChildSendEvent_subChildSendEvent:',myEvent);
        myEvent.emit("subChildSendEvent","subChildSendEvent")
    }

    // 使用pubsub-js 组件进行相关发布订阅模式测试
    pubsub_js_evnet = ()=>{
        PubSub.publish('start_time_down', 'start_time_down')
    }


    render() {
        return <div className='SubChild'>
            <Button onClick={this.subChildSendEvent}>
                SubChild_send
            </Button>

            <Button onClick={this.pubsub_js_evnet}>
                SubChild_send_pubsub_js
            </Button>
            
        </div>
    }
}

export default SubChild