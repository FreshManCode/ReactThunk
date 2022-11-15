import React from "react";
import { connect } from "react-redux";
import {requestUserSearch} from '../../actions/search'
import {Input,Button} from 'antd'
import './index.scss'

class ComC extends React.Component {
    constructor(props) {
        super(props)
    }
    searchUser = ()=>{
        const inputValue = this.nameInput.input.value
        console.log('hahah:',this.nameInput,'value:',inputValue);
        this.props.requestUser({name:inputValue})
    }
    render() {
        return <div className="ComC">
            <Input  placeholder="请输入姓名"  ref={val => this.nameInput = val} />
            <Button onClick={this.searchUser}>搜索用户</Button>

        </div>
    }

}
// export default connect((state=>{},{
//     requestUser:requestUserSearch,
// }))(ComC);

export default connect((state) => ({ count: state.count }), {
    requestUser:requestUserSearch,
  })(ComC);