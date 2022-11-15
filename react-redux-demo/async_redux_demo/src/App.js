import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import ComA from './pages/ComA'
import ComB from './pages/ComB'
import ComC from './pages/ComC'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <ComA/>
       <ComB/>
       <ComC/>
    </div>
    </Provider>
  );
}

export default App;
