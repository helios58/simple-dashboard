import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import CardList from './Components/Card/CardList';
import Form from './Components/Form/form';
import Insihgt from './Components/Insights/Insights';

function App() {
  const [startTimestamp, setStartTimestamp] = useState(null);
  const [endTimestamp, setEndTimestamp] = useState(null);
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '64px', padding: '20px' }}>
        <Header />
        <div>
          <Form setStartTimestamp={setStartTimestamp} setEndTimestamp={setEndTimestamp} />
        </div>
        <div>
          <CardList startTimestamp={startTimestamp} endTimestamp={endTimestamp} />
        </div>
        <div>
          <Insihgt />
        </div>
      </div>
    </div>
  );
}

export default App;