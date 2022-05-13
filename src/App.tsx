import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pallete from './components/pallete/pallete';
import Workspace from './components/workspace/workspace';

function App() {
  return (
    <div className="editor">
      <Pallete/>
      <Workspace/>
    </div>
  );
}

export default App;
