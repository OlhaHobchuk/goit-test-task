import { useState } from 'react';
import PropTypes from 'prop-types';
import { updateUsersData } from '../../services/api';

import logo from '../../images/Logo.png';
import background from '../../images/backgroundPicture.png';
import line from '../../images/line.png';
import circle from '../../images/circle.png';
import css from './TweetsCardsItem.module.css';

export const TweetsCardsItem = user => {
  const { id, avatar, tweets, followers, checked } = user.user;

  const [selection, setSelection] = useState(checked);
  const [followersCount, setFollowersCount] = useState(followers);

  const handleButtonClick = () => {
    setSelection(!selection);

    if (selection) {
      updateUsersData(id, {
        checked: !selection,
        followers: followersCount + 1,
      });
      setFollowersCount(followersCount + 1);
    }
    if (!selection) {
      updateUsersData(id, {
        checked: !selection,
        followers: followersCount - 1,
      });
      setFollowersCount(followersCount - 1);
    }
  };

  return (
    <li key={id} className={css.tweetsItem}>
      <img
        className={css.logoImage}
        src={logo}
        alt="logo"
        width="77"
        height="22"
      />
      <div className={css.imageWrapper}>
        <img
          className={css.backgroundImage}
          src={background}
          alt="background"
          width="308"
          height="162"
        ></img>
      </div>
      <div className={css.avatarWrapper}>
        <img className={css.avatarLine} src={line} alt="line" height="8" />
        <img
          className={css.avatarCircle}
          src={circle}
          alt="circle"
          width="80"
          height="80"
        />
        <img
          className={css.avatarImage}
          src={avatar}
          alt="user avatar"
          width="62"
          height="62"
        />
      </div>
      <div className={css.tweetsWrapper}>
        <p className={css.tweetsText}>{tweets} Tweets</p>
        <p className={css.followersText}>{followersCount} Followers</p>
      </div>
      <div className={css.buttonWrapper}>
        {selection ? (
          <button
            type="button"
            className={css.followButton}
            onClick={handleButtonClick}
            selected={selection}
          >
            Follow
          </button>
        ) : (
          <button
            type="button"
            className={css.followingButton}
            onClick={handleButtonClick}
            selected={selection}
          >
            Following
          </button>
        )}
      </div>
    </li>
  );
};

TweetsCardsItem.propTypes = {
  user: PropTypes.object.isRequired,
};
