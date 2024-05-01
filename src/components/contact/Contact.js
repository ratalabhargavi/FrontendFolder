import React from 'react';
import { Card } from 'react-bootstrap';
import Img from '../../photos/contact.jpg';
import config from '../../config';


function Contact() {
  return (
    <div>
      <Card className="text-white">
        <Card.Img src={Img} alt="Card image" height="700" width="600" style={{ opacity: "0.6" }} />
        <Card.ImgOverlay>
          <Card.Title>
            <h1 className="font-weight-bold text-danger">Contact Details</h1>
            <p className="font-weight-bold text-danger">Stay connected with New Life Hospital for a healthier tomorrow</p>
          </Card.Title>

          <Card.Text>
            <p className="text-danger">Address: 123 New Life Rd, City, Country</p>
            <p className="text-danger">Phone: +1234567890</p>
            <p className="text-danger">Email: info@newlifehospital.com</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Contact;
