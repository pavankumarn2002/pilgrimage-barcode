import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
export const PilgrimageQrCode = () => {
    const [numPilgrims, setNumPilgrims] = useState(1);
  const [pilgrimsDetails, setPilgrimsDetails] = useState([{ name: '', age: '', destination: '', date: '' }]);
  const [qrData, setQrData] = useState('');

  const handleNumPilgrimsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumPilgrims(num);
    
    const newPilgrims = Array(num).fill().map((_, i) => pilgrimsDetails[i] || { name: '', age: '', destination: '', date: '' });
    setPilgrimsDetails(newPilgrims);
  };

  const handlePilgrimChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPilgrims = pilgrimsDetails.map((pilgrim, i) => 
      i === index ? { ...pilgrim, [name]: value } : pilgrim
    );
    setPilgrimsDetails(updatedPilgrims);
  };

  const generateQRCode = () => {
    const jsonDetails = JSON.stringify(pilgrimsDetails);
    setQrData(jsonDetails);
  };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Pilgrimage Details to QR Code</h1>
        
        <div>
          <label>Number of Pilgrims: </label>
          <select value={numPilgrims} onChange={handleNumPilgrimsChange} style={{ marginBottom: '20px' }}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>
  
        {pilgrimsDetails.map((pilgrim, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>Pilgrim {index + 1}</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={pilgrim.name}
              onChange={(e) => handlePilgrimChange(index, e)}
              style={{ marginRight: '10px' }}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={pilgrim.age}
              onChange={(e) => handlePilgrimChange(index, e)}
              style={{ marginRight: '10px' }}
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={pilgrim.destination}
              onChange={(e) => handlePilgrimChange(index, e)}
              style={{ marginRight: '10px' }}
            />
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={pilgrim.date}
              onChange={(e) => handlePilgrimChange(index, e)}
              style={{ marginRight: '10px' }}
            />
          </div>
        ))}
  
        <button onClick={generateQRCode} style={{ marginTop: '20px' }}>
          Generate QR Code
        </button>
  
        <div style={{ marginTop: '30px' }}>
          {qrData && (
            <QRCodeCanvas value={qrData} size={256} />
          )}
        </div>
      </div>
    );
};
