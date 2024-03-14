import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8080/api');
        if (!response.ok) {
          throw new Error('Failed to fetch post data');
        }
        const allPosts = await response.json();
        const postData = allPosts.find(post => post._id === postId);
        if (!postData) {
          throw new Error('Post not found');
        }
        setPost(postData);
      } catch (error) {
        console.error(error);
        // Handle error (e.g., display error message)
      }
    };
    
    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-container">
      <img src={post.headerimage} alt="Header Image" className="post-image" />
      <h2 className="post-title">{post.title}</h2>
      <p className="post-date">{post.date}</p>
      <p className="post-text">{post.text}</p>
    </div>
  );
}

export default Post;
