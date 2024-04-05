import React from 'react';
import Banner from './components/Banner';
import NavBar from './components/Navigation';
import Project from './components/Project';


function App() {
  return (
    <div className='App'>
      <Banner />
      <NavBar />
      <Project />

      {/* <Banner /> */}
      {/* Autres composants et contenu de l'application */}
    </div>
  );
}

export default App;