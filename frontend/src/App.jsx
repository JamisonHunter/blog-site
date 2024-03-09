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
    <div>
      {/* Render the data if it's available */}
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>{data.text}</p>
          <p>Date: {data.date}</p>
          <p>{JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
