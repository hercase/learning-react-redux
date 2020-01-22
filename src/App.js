import React from 'react';

import './App.css';
import Control from './components/Control/index'
import Results from './components/Results';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Control />
        <Results />
      </div>
    </div>
  );
}

export default App;
