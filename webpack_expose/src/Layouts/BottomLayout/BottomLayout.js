import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import  './BottomLayout.scss'
const { Header, Content, Footer } = Layout

export default class BottomLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date:new Date().getFullYear(),
        }

    }
    render() {
        return <Layout>
            <Content>
                <Outlet/>
            </Content>
            <Footer className="footer">
                <span>Copyright@2018-{this.state.date}   北京新浪支付科技有限公司 京ICP证000007</span>
                <span  style={{marginLeft:'15px'}}>本网站支持<span className="ipv6">ipv6</span></span>
            </Footer>

        </Layout>
    }
}