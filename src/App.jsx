import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics label="Upload Stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
