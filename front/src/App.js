import './App.css';
import React, {useState,useEffect} from 'react';
import Eng from './components/Eng/Eng';
import Fab  from './components/Prod/Fab';
import Encours from './components/Encours/Encours';
import Controle from './components/RetourControle/Controle';
import Rend201 from './components/rendement_g/Rend201';


function App() {
/*  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  useEffect(() => { 

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
   }, [])*/
  return (
    <div className="App">
      <h1>Chaine 01 Ligne Dos</h1>
      <div className='container'>
       <Eng/>
       <Fab/>
       <Encours/>
       <Rend201/>
       
      </div>
    </div>
  );
}

export default App;
