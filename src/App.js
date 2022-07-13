import React from 'react';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div style={{position: 'relative', top: '44px'}}>
        <Sidebar />
        <div style={{position: 'relative', left: '40px'}}>
          Hello World
        </div>
      </div>
    </div>
  );
}

export default App;
