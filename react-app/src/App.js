import './App.css';
import Hero from './components/Hero';
import Minecraft from './components/Minecraft';
import React, { useRef } from 'react';

function App() {

  const mcRef = useRef(null);

  const scrollToMC = () => {
    if (mcRef.current) {
      mcRef.current.scrollIntoView({ behavior: 'smooth' });
      console.log("scrolled!");
    }
  };

  return (
    <div className="App">
      <Hero scrollToMC={scrollToMC}/>
      <Minecraft ref={mcRef}/>
    </div>
  );
}

export default App;
