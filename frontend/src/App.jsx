import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // Define state to store the fetched data
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Fetch data from the API
      const response = await fetch("http://127.0.0.1:8080/api");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      // Parse the response as JSON
      const jsonData = await response.json();
      // Update the state with the fetched data
      setPosts(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="intro-container">
        {/* Mapping over the array of posts and render each one in a separate div */}
        {posts.map(post => (
          <div key={post._id} className="post">
            <img src={post.headerimage} alt="Header Image" className="post-image" />
            <h2 className="post-title">{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p className="post-text">{post.text}</p>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
