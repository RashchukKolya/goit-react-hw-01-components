import styles from './FriendList.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ name, avatar, isOnline }, { key }) => {
  return (
    <li className={styles.item} key={key}>
      <span
        className={clsx(
          styles.status,
          isOnline ? styles.online : styles.offline
        )}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
