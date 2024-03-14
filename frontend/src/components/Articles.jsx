import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Articles() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/allposts");
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
    <div className="article-container">
      {posts.map(post => (
        <Link to={`/post/${post._id}`} key={post._id} className="post-link">
          <div className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-date">{post.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Articles;