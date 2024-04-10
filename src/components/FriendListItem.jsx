import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.friendListItem}>
            <img className={css.friendAvatar} src={avatar} alt={name} width="64" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx(css.friendStatus, isOnline && css.friendStatusIsOnline)}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}