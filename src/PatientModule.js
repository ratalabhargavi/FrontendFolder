import React from 'react';

function PatientModule({ patientInfo }) {
    return (
        <div>
            <h2>Welcome to Patient Dashboard</h2>
            <h3>Patient Information:</h3>
            <p>Name: {patientInfo.name}</p>
            <p>Age: {patientInfo.age}</p>
            <p>Gender: {patientInfo.gender}</p>
            {/* Add more patient information here */}
        </div>
    );
}

export default PatientModule;
