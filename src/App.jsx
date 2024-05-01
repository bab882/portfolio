import React from 'react';
import Banner from './components/Banner';
import NavBar from './components/Navigation';
import Project from './components/Project';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className='App'>
      <Banner />
      <NavBar />
      <Project />
      <Portfolio /> 
      {/* <Banner /> */}
      {/* Autres composants et contenu de l'application */}
    </div>
  );
}

export default App;