import React, { createRef } from 'react'
import './login.scss'
import {Button,Form,Input} from 'antd'
// 跳转登录方式1
import {Navigate,useNavigate} from 'react-router-dom'
import {myLogin} from '@/api/home_api'

const Item = Form.Item
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const withNavigation = (Component) =>{
  return (props)=><Component {...props} navigate={useNavigate()}></Component>
}
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
      myLogin().then(data=>{
        console.log('getMyList_data:',data)
        this.setState({toMainPath:true})
      }).catch(error=>{
        console.log('getMyList_error:',error)
      })
      console.log('loginAction:',values,'1122:',this.formRef.current)
    }).catch(error=>{
      console.log("error:",error)
    })
  }

  // react-router-dom 路由切换方式2
  loginAction2 = async () =>{
    console.log('这是登录方式2')
    this.props.navigate('/main')
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
      <Button className='loginButton' size='large' type='primary' onClick={this.loginAction}>登录方式1</Button>
      <Button className='loginButton' size='large' type='primary' onClick={this.loginAction2}>登录方式2</Button>


    </div>
  }
  
}
export default withNavigation(Login)