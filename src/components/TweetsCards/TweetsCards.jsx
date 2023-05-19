import { useState, useEffect } from 'react';
import { fetchUsers } from '../../services/api';
import Notiflix from 'notiflix';
import { Loader } from '../../components/Loader/Loader.jsx';
import { TweetsCardsItem } from '../../components/TweetsCardItem/TweetsCardsItem';

import css from './TweetsCards.module.css';

export const TweetsCards = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const PER_PAGE = 6;

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      try {
        const data = await fetchUsers(page, PER_PAGE);
        if (data.length === 0) {
          setShowLoadMoreBtn(false);
          Notiflix.Notify.warning('There are no users more');
          return;
        }
        setUsers(prevState => (page === 1 ? data : [...prevState, ...data]));
      } catch (error) {
        onError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [page]);

  const handleLoadMore = async () => {
    setLoadMore(true);
    setPage(page => page + 1);
    setLoadMore(false);
  };

  const onError = error => {
    Notiflix.Notify.warning('Sorry, there is something wrong!');
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul className={css.usersList}>
            {users.map(user => {
              return <TweetsCardsItem key={user.id} user={user} />;
            })}
          </ul>
          {showLoadMoreBtn && (
            <button
              onClick={handleLoadMore}
              type="button"
              className={css.loadMoreBtn}
            >
              {loadMore ? 'Loading...' : 'Load more'}
            </button>
          )}
        </>
      )}
    </>
  );
};
