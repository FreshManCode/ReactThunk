import "./App.css";
import { ConfigProvider } from "antd";
import { GetRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";
import {Provider} from  'mobx-react'

// import EventEmitter from  '@/utils/EventEmitter'
// EventEmitter.initInstance();

function App(props) {
  console.log("props",props)
  return (
    <ConfigProvider theme={{
      // 配置主体颜色
      token: {
        colorPrimary: '#00b96b',
      },
    }}>
      <Provider store={props.store}>
        <BrowserRouter>
          <GetRoutes />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
   
  );
}

export default App;
