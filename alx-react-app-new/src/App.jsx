import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';


function App() {
  return (
    <>
      <h1>User Profiles</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="An avid traveler and food lover" />
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
