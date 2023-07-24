import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import  './LoginLayout.scss'
const { Header, Content, Footer } = Layout

export default class LoginLayout extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          date:new Date().getFullYear(),
      }
  }
  render() {
      return <Layout className='main'>
          <Content className='myContentContainer'>
              <Outlet/>
          </Content>
      </Layout>
  }
}