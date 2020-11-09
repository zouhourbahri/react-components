import React from 'react';
import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';

function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
