import logo from './logo.svg';
import './App.css';
// 导入store
import store from './store'

// 导入Provider 组件,利用这个组件包裹我们的结构,从而能够达到同意维护store的效果
import {Provider} from 'react-redux'


import ComA from './pages/ComA'
import ComB from './pages/ComB'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA/>
        <ComB/>
     </div>
    </Provider>
  );
}

export default App;
