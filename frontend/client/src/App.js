import './App.css';
import Navbar from './components/Navber';
import Landing from './components/LandingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import { Provider } from 'react-redux'
import store from './store'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
