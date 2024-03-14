import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/api");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="intro-container">
      {posts.map(post => (
        <Link to={`/post/${post._id}`} key={post._id} className="post-link">
          <div className="post">
            <img src={post.headerimage} alt="Header Image" className="post-image" />
            <h2 className="post-title">{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p className="post-text">{post.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
