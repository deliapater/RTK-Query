import React from 'react';
import { useGetPostsQuery } from './features/posts/postsApiSlice';

function App() {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading posts.</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
