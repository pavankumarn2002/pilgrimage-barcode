import React, { useState } from 'react';
import { PilgrimageBarCode } from './PilgrimageBarCode';
import { PilgrimageQrCode } from './PilgrimageQrCode';
import './App.css'
function App() {
  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
    <PilgrimageBarCode/>
    <PilgrimageQrCode/>
    </div>
  );
}

export default App;
