import './App.css';
import store from './store'
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
