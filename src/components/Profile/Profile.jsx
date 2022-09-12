import style from './Profile.module.css'
import PropTypes from 'prop-types';

export function Profile(props) {
  const { username,
    tag,
    location,
    avatar,
    followers,
    views,
    likes } = props
  return (
    <div className= {style.profile} >
      <div className= {style.description}>
        <img src={avatar} alt="User avatar" className= {style.avatar} />
        <p className= {style.name}>{username}</p>
        <p className= {style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
