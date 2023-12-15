// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {

  // const [responseData, setResponseData] = useState(null);

  // const handlePostRequest = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api', {
  //     });

  //     setResponseData(response.data.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // useEffect(() => {
  //   handlePostRequest();
  // }, []);

  return (
    <div className="App">
      <MyComponent/>
    </div>
  );
}

export default App;
