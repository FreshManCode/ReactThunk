import logo from './logo.svg';
import './App.css';

import EventEmitter from  '@/utils/EventEmitter'
// 实例化 EventEmitter,并把实例挂载在window上
EventEmitter.initInstance()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/bottom/learn"
          target=""
          rel="noopener noreferrer"
        >
          使用react-router-domV6 进行路由嵌套功能
        </a>

        <a
          className="App-link"
          href="/bottom/home"
        >
          Home
        </a>
      </header>
    </div>
  );
}

export default App;
