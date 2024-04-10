import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.profile}>
            <div className={css.profileData}>
                <img
                    className={css.profileImage}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.profileName}>{name}</p>
                <p className={css.profileTag}>@{tag}</p>
                <p className={css.profileUserLocation}>{location}</p>
            </div>
            <ul className={css.profileStats}>
                <li className={css.profileStatsItem}>
                    <span className={css.profileStatsItemTitle}>Followers</span>
                    <span className={css.profileStatsItemValue}>{stats.followers}</span>
                </li>
                <li className={css.profileStatsItem}>
                    <span className={css.profileStatsItemTitle}>Views</span>
                    <span className={css.profileStatsItemValue}>{stats.views}</span>
                </li>
                <li className={css.profileStatsItem}>
                    <span className={css.profileStatsItemTitle}>Likes</span>
                    <span className={css.profileStatsItemValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}