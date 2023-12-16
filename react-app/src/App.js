import './App.css';
import Hero from './components/Hero';
// import Minecraft from './components/Minecraft';
import React, { useRef } from 'react';
import Cards from './components/Cards';

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
      {/* <Minecraft ref={mcRef}/> */}
      <Cards ref={mcRef}/>
    </div>
  );
}

export default App;
