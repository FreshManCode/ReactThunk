import React from 'react'
import './index.scss'
import {objctData,userInfo} from './mockData'
import {Button} from 'antd'

class MockJS extends React.Component {


    testMockJS1 = ()=>{
        console.log('objctData:',objctData,'jsonData:',JSON.stringify(objctData));
    }

    testMockJS2 = ()=>{
        console.log('userInfo:',userInfo,'jsonData:',JSON.stringify(userInfo));
    }
    render() {
        return <div className='MockJS'>
                <h3>MockJS测试</h3>
                <div className='contentWrapper'>
                    <Button className='button' onClick={this.testMockJS1}>测试MockJS1</Button>
                    <Button className='button' onClick={this.testMockJS2}>测试MockJS2</Button>
                </div>
            
            
            
        </div>
    }
}
export default MockJS;