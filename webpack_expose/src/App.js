import logo from "./logo.svg";
import "./App.css";
import { ConfigProvider } from "antd";
import { GetRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      <BrowserRouter>
        <GetRoutes />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
