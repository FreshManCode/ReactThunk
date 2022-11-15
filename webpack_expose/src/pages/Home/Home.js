import React from 'react'
import  './Home.scss'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import {getGoodsList,getUserInfo} from '@/api/home_api'
export default class Home extends React.Component {

    callUserInfoAPI = async ()=>{
        console.log('这是异步获取的哈哈:NODE_ENV', process.env.NODE_MYENV);
        
        const res = await getUserInfo({'id':'1'});
        console.log("callUserInfoAPI_res:",res)
    }

    render() {
        return <div className="home">
            Home
            <Link to={'/bottom/mockJS'}>MockJS</Link>
            <div className="buttonWrapper">
                <Button onClick={this.callUserInfoAPI}>
                    userInfoAPI
                </Button>

            </div>
        </div>
    }
}