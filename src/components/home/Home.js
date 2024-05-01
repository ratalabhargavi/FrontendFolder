import React from 'react';
import Img from '../../photos/hospital3.jpg';
import { Card } from 'react-bootstrap';
import config from '../../config'
function Home() {
  return (
    <div>
      <Card className="text-white text-center">
        <Card.Img src={Img} alt="Card image" height="700" width="1000" style={{ opacity: "0.6" }} />
        <Card.ImgOverlay>
          <Card.Title>
            <div>
              {/* Increase the font size by adding inline style */}
              <h1 className="font weight-bold text-white" style={{ fontSize: '48px' }}>Hospital-Management-System</h1>
            </div>
            {/* Increase the font size by adding inline style */}
            <p className="font weight-bold text-white" style={{ fontSize: '25px' }}>Health Care For Your Family Health</p>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Home;