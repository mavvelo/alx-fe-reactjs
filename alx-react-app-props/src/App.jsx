import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

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
          <Footer />
      </div>
  );
}

export default App;