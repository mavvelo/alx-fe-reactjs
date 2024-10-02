// api.js
export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  export default api;
  
  // Other API functions (e.g., fetchComments, fetchUsers, etc.)