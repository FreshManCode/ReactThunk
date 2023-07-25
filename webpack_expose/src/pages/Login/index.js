import React from 'react'
import './login.scss'
import {Button} from 'antd'
export default class extends React.Component {
  loginAction = ()=>{
    console.log('loginAction:',window.myEvent)
  }
  render() {
    return <div className='myLogin'>
      <h3>这是登录页面哈</h3>
      <Button type='primary' onClick={this.loginAction}>登录</Button>

    </div>
  }
  
}