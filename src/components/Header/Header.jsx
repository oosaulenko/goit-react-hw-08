import css from './Header.module.css';
import Nav from '../Nav/Nav.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import UserMenu from '../UserMenu/UserMenu.jsx';

export default function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
        <div className={css.menu}><Nav/></div>
        <div className={css.menu}>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </div>
    </header>
  );
};