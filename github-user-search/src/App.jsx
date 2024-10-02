import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import SearchPage from './components/SearchPage';

function App() {
  return (
    
    <Router>
      <Routes>
      <h1>GitHub User Search</h1>
      <Search />
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;