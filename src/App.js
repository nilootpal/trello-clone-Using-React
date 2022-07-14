import React from 'react';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div style={{position: 'relative', top: '44px'}}>
        <Sidebar />
        <div style={{position: 'fixed', left: '40px', width: '100%'}}>
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default App;
