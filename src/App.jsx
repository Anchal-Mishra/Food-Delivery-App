import Header from './components/Header'
import './index.css'
import { Outlet } from 'react-router-dom';
import store from './redux/stores';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <Header/>
      <Outlet/>
    </Provider>
  )
}

export default App;
