import { useNavigate } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import { TweetsCards } from '../../components/TweetsCards/TweetsCards.jsx';

import css from './TweetsPage.module.css';

const TweetsPage = () => {
  const navigate = useNavigate();
  return (
    <div className={css.tweetsPageContainer}>
      <div className={css.arrowContainer} onClick={() => navigate('/')}>
        <IoCaretBackOutline className={css.backArrow} />
      </div>
      <div className={css.tweetsCardsContainer}>
        <TweetsCards />
      </div>
    </div>
  );
};

export default TweetsPage;
