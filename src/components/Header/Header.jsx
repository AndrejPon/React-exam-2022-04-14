import { Link } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <img
        className={css.img}
        src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
        alt='Google logo'
      />
      <nav className={css.navLinks}>
        <Link to='/home'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
        <Link to='/add'>Add</Link>
      </nav>
    </header>
  );
}

export default Header;
