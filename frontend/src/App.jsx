import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Define state to store the fetched data
  const [data, setData] = useState(null);

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
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='main-intro-container'>
        {/* Render the data if it's available */}
        {data && (
          <div>
            <img src={ data.headerimage } alt="Header Image" className="main-intro-image"></img>
            <h2 className="main-intro-title">{data.title}</h2>
            <p className="main-intro-date">{data.date}</p>
            <p className="main-intro-text">{data.text}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
