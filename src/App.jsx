import user from './data/user.json';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Profile {...user} />
    </>
  );
}

export default App;
