// PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

function PostsComponent() {
  const { data, isError, error, isLoading, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
    staleTime: 30 * 1000, // Data is fresh for 30 seconds
    refetchOnWindowFocus: true, // Refetch on window focus
    keepPreviousData: true, // Keep previous data while loading new data
  });

  const handleRefetch = () => {
    refetch(); // Trigger refetch when the button is clicked
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error occurred: {error.message}</p>;

  return (
    <div>
      <button onClick={handleRefetch}>Refetch Posts</button> {/* Button with onClick */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;