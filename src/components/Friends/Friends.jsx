import style from "./Friends.module.css"
import PropTypes from 'prop-types';

const Friends = ({ friends }) => {
  return (
      <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={style.item} key={id}>
              <span className={style.status}>{ isOnline?"🟢": "🔴"}</span>
          <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={style.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Friends;

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    isOnline:PropTypes.bool,
    name:PropTypes.string}))
    
}
