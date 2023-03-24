import PropTypes from 'prop-types';
import './profile.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
  profileViews,
  profileLikes,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className={avatar} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{profileViews}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{profileLikes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
  profileViews: PropTypes.number.isRequired,
  profileLikes: PropTypes.number.isRequired,
};
export default Profile;

// const  profile = profiles[0]
// ReactDOM.render(
//     <Profile
//         username={profile.username}
//         tag={profile.tag}
//         location={profile.location}
//         avatar={profile.avatar}
//         stats={profile.stats.followers}
//         profileViews={profile.stats.views}
//         profileLikes={profile.stats.likes}
//     />,
//     document.querySelector('#root'),
// );
