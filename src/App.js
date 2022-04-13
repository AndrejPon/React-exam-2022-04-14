import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path={'/home'} exact>
          <HomePage />
        </Route>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/add'}>
          <AddPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
