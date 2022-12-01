import React from "react";
import { connect } from "react-redux";
import {
  decrementCreator,
  incrementAsync,
  incrementCreator,
  requestTestFaceIDToken,
  requestFaceIDResult,
  requestKSToken,
} from "../../actions";
import { getQueryVariable } from "../../util";
import { message, Spin } from "antd";
import "./index.css";
import "./test.scss";

class ComA extends React.Component {
  state = {
    selsectValue: 1,
  };

  componentDidMount() {
    if (getQueryVariable("token")) {
      const params = Object.assign(
        {
          appId: "92e767f5d4f64817b153e894eebc08ed",
          appKey: "NzgyMTA4MjY=",
        },
        { token: getQueryVariable("token") }
      );
      this.props.requestFaceIDResult(
        params,
        (res) => {
          console.log("requestFaceIDResult_res is:", res);
        },
        (error) => {
          console.log("requestFaceIDResult_error is:", error);
        }
      );
    }
  }

  callOutJS = () => {
    // 调用外部的js
    this.props.requestFaceIDToken((success) => {
      if (success.code == "1000") {
        const token = success.entity.token;
        sessionStorage.setItem("faceid_token", token);
        window.startVerify(
          token,
          "https://h5.hisign.com.cn:42116/iv-live/live"
        );
      } else {
        const msg = success.msg ? success.msg : "请求失败,请稍后再试";
        message.error(msg);
      }
      console.log("success is:", success);
    });
  };

  // 调用旷视JS
  callKSJS = () => {
    this.props.requestKSToken(
      (res) => {
        console.log("callKSJS_res:", res);
      },
      (error) => {
        console.log("callKSJS_error:", error);
      }
    );
  };

  useInnerToken = () => {
    const token = sessionStorage.getItem("faceid_token");
    window.startVerify(
      token ? token : "22113100819_747968929186795520",
      "https://h5.hisign.com.cn:42116/iv-live/live"
    );
  };

  selectOnchange = (obj) => {
    console.log("this.selsectVal.value:", this.selsectVal.value);
    this.setState({
      selsectValue: Number(this.selsectVal.value),
    });
  };

  render() {
    console.log("comA_this.props:", this.props);
    const number = this.state.selsectValue;
    return (
      <Spin spinning={this.props.loadingObj.loading}>
        <div className="ComA">
          <div className="buttonContainer">
            <button onClick={this.callOutJS}>海鑫JS</button>
            <button onClick={this.callKSJS}>旷视JS</button>
            <button className="test" onClick={this.useInnerToken}>
              本地token
            </button>
            <button
              onClick={() => {
                this.props.increment(number);
              }}
            >
              同步加法
            </button>
            <button
              onClick={() => {
                this.props.decrement(number);
              }}
            >
              同步减法
            </button>
            <button
              onClick={() => {
                this.props.incrementAsyc(number);
              }}
            >
              异步加法
            </button>
          </div>
          <select
            ref={(val) => (this.selsectVal = val)}
            onChange={this.selectOnchange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </Spin>
    );
  }
}

export default connect(
  (state) => ({ count: state.count, loadingObj: state.loadingObj }),
  {
    increment: incrementCreator,
    decrement: decrementCreator,
    incrementAsyc: incrementAsync,
    requestFaceIDToken: requestTestFaceIDToken,
    requestFaceIDResult: requestFaceIDResult,
    requestKSToken: requestKSToken,
  }
)(ComA);
