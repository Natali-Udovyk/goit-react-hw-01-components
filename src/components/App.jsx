import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';

const style = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
  background: '#E7ECF2',
};
export const App = () => {
  return (
    <div style={style}>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats.followers}
          profileViews={user.stats.views}
          profileLikes={user.stats.likes}
        />
      </div>
    </div>
  );
};
