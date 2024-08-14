import React, { useState } from "react";
import Barcode from "react-barcode";
export const PilgrimageBarCode = () => {
    const [details, setDetails] = useState({
        name: "",
        age: "",
        destination: "",
        date: "",
    });
    const [barcodeData, setBarcodeData] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };

    const generateBarcode = () => {
        const jsonDetails = JSON.stringify(details);
        setBarcodeData(jsonDetails);
    };
    return (
        <div>
            <h1>Pilgrimage Details to Barcode</h1>
            <div>
                <input type="text" name="name" placeholder="Name" value={details.name} onChange={handleChange} style={{ marginRight: "10px" }} />
                <input type="number" name="age" placeholder="Age" value={details.age} onChange={handleChange} style={{ marginRight: "10px" }} />
                <input
                    type="text"
                    name="destination"
                    placeholder="Destination"
                    value={details.destination}
                    onChange={handleChange}
                    style={{ marginRight: "10px" }}
                />
                <input type="date" name="date" placeholder="Date" value={details.date} onChange={handleChange} style={{ marginRight: "10px" }} />
            </div>
            <button onClick={generateBarcode} style={{ marginTop: "20px" }}>
                Generate Barcode
            </button>
            <div className="bar-code">{barcodeData && <Barcode value={barcodeData} width="1px" />}</div>
        </div>
    );
};
