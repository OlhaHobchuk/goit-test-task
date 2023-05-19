import mainPageImage from '../../images/mainPage.jpg';
import css from './Home.module.css';

export const Home = () => {
  return (
    <div className={css.homeContainer}>
      <div className={css.mainImageContainer}>
        <img src={mainPageImage} alt="main page" className={css.mainImage} />
      </div>
    </div>
  );
};
