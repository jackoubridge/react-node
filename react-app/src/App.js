import './App.css';
import Hero from './components/Hero';
import React, { useRef } from 'react';
import News from './components/News';
import Minecraft from './components/Minecraft';
import Gallery from './components/Gallery';

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
      <News />
      <Gallery/>
    </div>
  );
}

export default App;
