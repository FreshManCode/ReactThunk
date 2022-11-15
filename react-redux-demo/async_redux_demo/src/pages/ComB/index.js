import React from "react";
import { connect } from "react-redux";
import './index.css'
import { Spin} from 'antd'

class ComB extends React.Component {
    callOutJS = ()=>{
        // 调用外部的js
        window.startVerify('2112211212211221','baidu.com')
    }
  render() {
      console.log('this.props:',this.props);
    return <Spin spinning={this.props.isFetching}>
            <div className='ComB'>
                我接收到了组件A发送过来的指令 <p className="redP">{this.props.count}</p>
            </div>
         </Spin> 
  }
}

export default connect((state) => {
  console.log('state is:',state)
  return ({ count: state.counter.count,isFetching:state.counter.isFetching ,data:state.counter.data})
}, {


})(ComB);
