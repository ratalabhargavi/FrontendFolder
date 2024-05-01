import React, { useState, useEffect } from 'react';

function DoctorModule() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // Fetch doctors data from your backend
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            // Make a GET request to fetch doctors data
            const response = await fetch('your_backend_url/doctors');
            const data = await response.json();
            setDoctors(data); // Set the fetched doctors data to state
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    return (
        <div>
            <h2>Doctors Information</h2>
            <ul>
                {doctors.map(doctor => (
                    <li key={doctor.id}>
                        <h3>{doctor.name}</h3>
                        <p>Specialization: {doctor.specialization}</p>
                        <p>Location: {doctor.location}</p>
                        {/* Add more doctor information here */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DoctorModule;
