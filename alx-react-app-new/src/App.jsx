import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  const user = {
    name: "Mike",
    age: 25,
    bio: "Loves hiking and photography",
  };
  return (
      <div>
          <WelcomeMessage />
          <Header />
          <UserProfile {...user} />
          <MainContent />
          <Counter />
          <Footer />
      </div>
  );
}

export default App;