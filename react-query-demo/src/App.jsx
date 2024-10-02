// App.jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent'; // Ensure this is pointing to PostsComponent.jsx

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Blog Posts</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;