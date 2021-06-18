import './App.css';
import {BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';
import {useEffect} from 'react';
import {connectWithWebSocket} from './utils/wssConnection/wssConnection';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './LoginPage/LoginPage';

function App() {
  useEffect(() => {
    connectWithWebSocket();
  },[]);
  return (
    <Router>
      <Switch>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/'>
          <LoginPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
