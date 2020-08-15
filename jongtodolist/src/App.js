import React from 'react';
import Head from './component/head';
import Middle from './component/middle';
import './main.css';

function App() {
  return (
    <div className="all">
      <header>
          <h1>JONG TODO LIST</h1>
      </header>

      <Middle/>
    </div>
  );
}

export default App;
