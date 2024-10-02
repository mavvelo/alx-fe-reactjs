import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider value={{ name: "Jane Doe", email: "jane.doe@example.com" }}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;