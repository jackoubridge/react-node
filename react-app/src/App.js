import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Hero from './components/Hero';
import Minecraft from './components/Minecraft';
import News from './components/News';
import Gallery from './components/Gallery';

function App() {

  const mcRef = useRef(null);

  const scrollToMC = () => {
    if (mcRef.current) {
      mcRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [responseData, setResponseData] = useState(null);

  const handlePostRequest = async () => {
    try {
        const response = await axios.post('https://jackoubridge.onrender.com/fetchdata', {
        });

        setResponseData(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
  }

  useEffect(() => {
  handlePostRequest();
  }, []);

  if(!responseData){
    return null;
  }

  return (
    <div className="App">
      <Hero scrollToMC={scrollToMC}/>
      <Minecraft ref={mcRef} ip={responseData.ip} online={responseData.online} playersCurrent={responseData.pCurr}/>
      <News />
      <Gallery/>
    </div>
  );
}

export default App;
