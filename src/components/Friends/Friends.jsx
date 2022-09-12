import style from "./Friends.module.css"
import PropTypes from 'prop-types';

const Friends = ({ friends }) => {
  return (
      <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={style.item} key={id}>
              <span className={style.status}>{ isOnline?"🟢": "🔴"}</span>
          <img class="avatar" src={avatar} alt="User avatar" width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Friends;

Friends.propTypes = {
    avatar: PropTypes.string,
    isOnline:PropTypes.bool,
    name:PropTypes.string
}
