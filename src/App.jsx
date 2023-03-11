import user from './data/user.json';
import data from './data/data.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics label="Upload Stats" stats={data} />
    </>
  );
}

export default App;
