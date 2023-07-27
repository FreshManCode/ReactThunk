import React, { createRef } from 'react'
import './login.scss'
import {Button,Form,Input} from 'antd'
import {Navigate} from 'react-router-dom'

const Item = Form.Item
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
class Login extends React.Component {
  
  constructor(props) {
    super(props)
    this.formRef = React.createRef();
    this.state = {
      toMainPath:false,
    }
  }
  componentDidMount() {
    
  }
  loginAction = async ()=>{
    this.formRef.current.validateFields().then((values)=>{
      this.setState({toMainPath:true})
      console.log('loginAction:',values,'1122:',this.formRef.current)
    }).catch(error=>{
      console.log("error:",error)
    })
    
  }
  
  render() {
    const {toMainPath} = this.state
    return <div className='myLogin'>
      {toMainPath && <Navigate to={'/main'} replace/>}
      <h3>会员登录</h3>
      <Form {...layout} ref={this.formRef} >
        <Item name='account' label='账号' rules={[{required:true,message:'请输入账号',}]}>
          <Input placeholder='请输入账号' maxLength={24}></Input>
        </Item>
        <Item name='password' label='密码' rules={[{required:true,message:'请输入账号',}]}>
          <Input placeholder='请输入密码' type='password' maxLength={24}></Input>
        </Item>
      </Form>
      <Button className='loginButton' size='large' type='primary' onClick={this.loginAction}>登录</Button>

    </div>
  }
  
}
export default Login