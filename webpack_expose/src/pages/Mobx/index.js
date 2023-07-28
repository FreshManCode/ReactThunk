import React,{Fragment} from 'react'
import {inject,observer} from 'mobx-react'
import './mobx.scss'
import {showLoading,hideLoading} from '@/utils/loading'

// 在组件中使用 @inject 装饰器注入 Store 时，确保传入的参数与提供的 Store 实例名称一致
@inject('store')
@observer
export default class Mobx extends React.Component {
  constructor(props)  {
    super(props)
    console.log("Mobx_props:",props)    
  }

  increment = ()=>{
    console.log('mine_mine_mine');
    this.props.store.home.increment()
  }
  delayIncrement = () =>{
    this.props.store.home.delayIncrement(2000)
  }

  showLoading = () =>{
    showLoading();
  }


  render() {
    const {home} = this.props.store
    return <Fragment>
      <button onClick={this.increment}>点我年龄+1</button>
      <button onClick={this.delayIncrement}>点我年龄延迟+1</button>
      <button onClick={home.delaySyncNetwork}>模拟网络数据</button>
      <button onClick={this.showLoading}>showLoading</button>
      <p>年龄:<strong>{this.props.store.home.age}</strong></p>
      <p>双倍年龄:<strong>{this.props.store.home.doubleAge}</strong></p>
    </Fragment>
  }
}