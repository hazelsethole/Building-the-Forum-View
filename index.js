// src/pages/index.js
import React from 'react';
import PostList from '../components/PostList';

// Mock data for demonstration
const postsData = [
  { id: 1, title: 'Post One', content: 'This is the first post', author: 'Karan Mehta' },
  { id: 2, title: 'Post Two', content: 'This is the second post', author: 'Meera Nair' },
];

const HomePage = ({ posts }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Forum Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

// Fetch posts using getStaticProps (or getServerSideProps if using server-side rendering)
export async function getStaticProps() {
  // Simulate fetching from an API or static source
  const posts = postsData; // Replace with API call if needed

  return {
    props: {
      posts,
    },
  };
}

export default HomePage;
