import clsx from 'clsx';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={clsx(
          css.status,
          isOnline ? css.online : css.offline
        )}
      ></span>
      <img className={css.avatar} src={avatar} alt="User's avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
