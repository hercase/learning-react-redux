import React from 'react';

import './App.css';
import Control from './components/Counter/Control/index'
import Results from './components/Counter/Results';
import Posts from './components/Posts';
import Header from './components/header';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Control />
        <Results />
        <Posts />
      </div>
    </div>
  );
}

export default App;
