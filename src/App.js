import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageSearch from './features/search';
import Feed from './features/feed';

function App() {
  return (
    <div className="App">
      <ImageSearch />
      <Feed />
    </div>
  );
}

export default App;
