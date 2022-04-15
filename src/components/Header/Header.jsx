import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import css from './Header.module.css';

function Header() {
  const authCtx = useContext(AuthContext);
  return (
    <header className={css.header}>
      <img
        className={css.img}
        src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
        alt='Google logo'
      />
      <nav className={css.navLinks}>
        {authCtx.isLoggedIn && <NavLink to='/home'>Home</NavLink>}
        {!authCtx.isLoggedIn && <NavLink to='/register'>Register</NavLink>}
        {!authCtx.isLoggedIn && <NavLink to='/login'>Login</NavLink>}
        {authCtx.isLoggedIn && <NavLink to='/add'>Add</NavLink>}
      </nav>
    </header>
  );
}

export default Header;
