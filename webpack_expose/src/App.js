import "./App.css";
import { ConfigProvider } from "antd";
import { GetRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";

// import EventEmitter from  '@/utils/EventEmitter'
// EventEmitter.initInstance();

function App() {
  return (
    <ConfigProvider theme={{
      // 配置主体颜色
      token: {
        colorPrimary: '#00b96b',
      },
    }}>
      <BrowserRouter>
        <GetRoutes />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
