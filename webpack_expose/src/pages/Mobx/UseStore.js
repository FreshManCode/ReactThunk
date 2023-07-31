import React,{Fragment} from 'react'
import './UseStore.scss'
import {inject,observer} from 'mobx-react'
import {memberInfo} from '@/api/home_api'

@inject('store')
@observer
class UseStore extends React.Component {

  userInfo = () =>{
    memberInfo();
  }

  render() {
    const {user} = this.props.store
    console.log('user:',user.userInfo,'name:',user.contactName)
    const userKeys = user.userInfo && Object.keys(user.userInfo) || [];

    console.log('userKeys:',userKeys)
    return <div className='UseStore'>
      <Fragment>
        <button onClick={this.userInfo}>获取用户信息</button>
        {
          userKeys.length > 0 && <ul>
            {
              userKeys.map((item,index)=>{
                return <li key={index}>key:{item}_value:<strong>{user.userInfo[item]}</strong></li>
              })
            }
          </ul>
        }
      </Fragment>

    </div>
  }
}

export default UseStore;