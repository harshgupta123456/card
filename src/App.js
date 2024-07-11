// src/App.js
import React from 'react';
import FlowTree from './Flowtree';
import './App.css';

const data = {
  nodes: [
    { id: '1', type: 'input', label: 'Start Node', position: { x: 250, y: 5 } },
    { id: '2', label: 'Node 2', position: { x: 100, y: 100 } },
    { id: '3', label: 'Node 3', position: { x: 400, y: 100 } },
  ],
  edges: [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>Flow Tree Example</h1>
      <FlowTree data={data} />
    </div>
  );
}

export default App;
