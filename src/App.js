import React from 'react';

import './App.css';
import Control from './components/Counter/Control/index'
import Results from './components/Counter/Results';
import AddPosts from './components/Posts/AddPosts';
import Header from './components/header';
import ListPosts from './components/Posts/ListPosts';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Control />
        <Results />
        <AddPosts />
        <ListPosts />
      </div>
    </div>
  );
}

export default App;
