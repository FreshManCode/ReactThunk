import React from "react";
import { DesktopOutlined,FileOutlined,PieChartOutlined,TeamOutlined,UserOutlined,AndroidOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet,Link } from 'react-router-dom'
import './MainLayout.scss'

const { Header, Content, Footer, Sider } = Layout;

const BreadItem = Breadcrumb.Item

const URLMaps = {
  '/main/optionsone':'1',
  '/main/optionstwo':'2',
  "/main/content":'9',
  "/mobx/home":'sub3_10',
  "/mobx/usestore":"sub3_11",
}

const URLSubMaps = {

}

class  MainLayout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed:false,
      defaultSelectedKeys:'',
      // 默认子项展开的key
      defaultOpenKeys:'',
      breadItems:[],
    }
  }

  componentDidUpdate(preProps) {
    console.log('preProps:',preProps.location,'props:',this.props.location)
  }

  componentWillMount(props) {
    const path = window.location.pathname;
    const key  = (URLMaps[path]|| '1') + '';
    const subMenuIsOpen = key.indexOf("_") >= 0
    const subKey = subMenuIsOpen ? key.split('_')[0] : '';
    console.log("key:",key)
    this.setState({
      defaultSelectedKeys:key,
      defaultOpenKeys:subKey + ''
    })
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps')
  }

  componentDidMount() {
   
    console.log('componentDidMount:');
  }

   sideMenuClick = (e)=> {
    // 通过keyPath 数组中对应的索引来判断,也可以根据URL来判断
    const {key,keyPath} = e
    const paths = window.location.pathname.split('/').filter((item)=>item.length > 0);
    this.setState({
      breadItems:paths,
    })
    console.log('sideMenuClick:','key:',key,'keyPath:',keyPath)
  }

  getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  // { path: "/main/content", element: <MainLayoutComponent /> },
  // { path: "/main/optionsone", element: <OptionsOne /> },
  // { path: "/main/optionstwo", element: <OptionsTWO /> },

  items = [
    // 注意:这里面的key值要唯一,否则会出现点击一个item,多个item同时高亮情况
    this.getItem('Option 1', '1', <Link to={'/main/optionsone'}><PieChartOutlined /></Link>),
    this.getItem('Option 2', '2', <Link to={'/main/optionstwo'}><DesktopOutlined /></Link>),
    this.getItem('User', 'sub1', <UserOutlined />, [
      this.getItem('Tom', '3'),
      this.getItem('Bill', '4'),
      this.getItem('Alex', '5'),
    ]),
    this.getItem('Team', 'sub2', <TeamOutlined />, [this.getItem('Team 1', '6'), this.getItem('Team 2', '8')]),
    this.getItem('mobx', 'sub3', <AndroidOutlined />,[
      this.getItem('mobx入门','sub3_10',<Link to={"/mobx/home"}><UserOutlined /></Link>),
      this.getItem('usestore','sub3_11',<Link to={"/mobx/usestore"}><UserOutlined /></Link>),
    ]),
    this.getItem('Files', '9', <Link to={"/main/content"}><FileOutlined /></Link>),
  ];



  render() {
    const {collapsed,defaultSelectedKeys,breadItems,defaultOpenKeys} = this.state
    console.log('defaultSelectedKeys:',defaultSelectedKeys,'subKey:',defaultOpenKeys)
    return <Layout style={{minHeight:'100vh'}}>
      <Sider collapsible collapsed={collapsed} trigger={null}  onCollapse={(value)=>{this.setState({collapsed:value})}}>
        <div className="demo-logo-vertical" />
        <Menu 
        theme="dark" 
        onClick={this.sideMenuClick} 
        defaultSelectedKeys={[defaultSelectedKeys]}
        defaultOpenKeys={[defaultOpenKeys]}
        mode="inline" 
        items={this.items}
         />
      </Sider>
      <Layout>
        <Header className="HeaderView">
          <h3>这是Header</h3>
        </Header>
        <Content className="ContentView">
          <Breadcrumb className="BreadcrumbView">
            {
              breadItems.map((item)=>{
                return <BreadItem key={item}>{item}</BreadItem>
              })
            }
            {/* <BreadItem>User</BreadItem>
            <BreadItem>Bill</BreadItem> */}
          </Breadcrumb>
          <div style={{padding:24,minHeight:360,background:'$baseBackColor'}}>
            <Outlet/>
          </div>
        </Content>
        <Footer className="FooterView">
          zhangjunjun ©2023 Created by zhangjunjun
        </Footer>
      </Layout>


    </Layout>
  }
  
}

export default MainLayout;