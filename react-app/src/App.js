import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Hero from './components/Hero';
import Minecraft from './components/Minecraft';
import Gallery from './components/Gallery';

function App(props) {

  const mcRef = useRef(null);

  const scrollToMC = () => {
    if (mcRef.current) {
      mcRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [responseData, setResponseData] = useState(null);

  const handlePostRequest = async () => {
    try {
      const response = await axios.post('/fetchdata', {
      });

      setResponseData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    handlePostRequest();
  }, []);

  if (!responseData) {
    return null;
  }

  return (
    <div className="App overflow-hidden">
      <Hero scrollToMC={scrollToMC} />
      <Minecraft ref={mcRef} ip={responseData.ip} online={responseData.online} playersCurrent={responseData.pCurr} version={responseData.version} />
      <Gallery />
    </div>
  );
}

export default App;
