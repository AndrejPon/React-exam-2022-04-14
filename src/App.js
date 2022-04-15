import { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute';
import AddPage from './pages/AddPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthContext from './store/authContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('');

  function logout() {
    setIsLoggedIn(false);
  }
  function login(email, password) {
    console.log('email, password', email, password);
    setIsLoggedIn(true);
  }

  const currentContextValue = {
    isLoggedIn,
    logout,
    login,
  };
  return (
    <AuthContext.Provider value={currentContextValue}>
      <div className='App'>
        <Header />
        <Switch>
          <Route path={'/register'}>
            <RegisterPage />
          </Route>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <ProtectedRoute path={'/home'} exact>
            <HomePage />
          </ProtectedRoute>
          <ProtectedRoute path={'/add'}>
            <AddPage />
          </ProtectedRoute>
          <Route path={'*'}>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
