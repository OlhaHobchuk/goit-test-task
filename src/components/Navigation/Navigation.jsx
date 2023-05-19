import { NavLink } from 'react-router-dom';
import { BsFillHouseFill } from 'react-icons/bs';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={css.navigationContainer}>
      <nav className={css.navigation}>
        <NavLink className={css.navigationLinkIcon} to="/">
          <BsFillHouseFill className={css.homeIcon} />
        </NavLink>
        <NavLink className={css.navigationLink} to="/tweets">
          Tweets
        </NavLink>
      </nav>
    </div>
  );
};
