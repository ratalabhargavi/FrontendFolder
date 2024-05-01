import React from 'react';
import newLifeHospitalImage from '../../about.jpg'; // Import your new image file from src folder
import config from '../../config';

function About() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img src={newLifeHospitalImage} alt="New Life Hospital" className="about-image" style={{ width: "50%", maxWidth: "300px", height: "auto" }} />
      </div>
      <h1 className="head" align="center"> About New Life Hospital </h1>
      <br />

      <blockquote className="blockquote">
        <p>New Life Hospital is committed to providing top-quality healthcare services to the community. With our state-of-the-art facilities and experienced medical professionals, we ensure the well-being of our patients is always our top priority.</p>
        <p>Located in the heart of the city, New Life Hospital serves thousands of patients every year, offering a wide range of medical treatments and services.</p>
        <p>Our team consists of highly skilled doctors, nurses, and support staff who work tirelessly to deliver exceptional care to our patients. Whether it's routine check-ups or complex surgeries, we strive for excellence in everything we do.</p>
        <p>At New Life Hospital, we believe in continuous improvement and innovation. We regularly update our facilities and adopt the latest technologies to provide the best possible care.</p>
        <p>Thank you for choosing New Life Hospital for your healthcare needs. We are honored to serve you and your family.</p>
      </blockquote>
    </div>
  );
}

export default About;
