import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard style={{ maxWidth: '42rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src= ' https://rukminim1.flixcart.com/image/416/416/l3nco7k0/cycle/8/x/d/ut3003a26-alloy-mtb-with-21-shimano-gear-and-installation-original-imagepuzhryhbgws.jpeg?q=70' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba( 251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle> Urban Terrain UT3003A26 Alloy MTB with 21 Shimano Gear and Installation services 26 T Mountain/Hardtail Cycle  (21 Gear, Black)</MDBCardTitle>
        <MDBCardText  >
        
     
Urban Terrain UT3003A26 Mountain Bike is the best in the class bike for ultimate riding experience. It is made of Lightweight  Aluminum Alloy and world renowned Shimano Gears to maximize durability and performance. Wheel size of 26 inches and 21-Speed Gear Shift makes it ideal for riding in all conditions.
        </MDBCardText>
        <MDBBtn href="" >ADD TO CART</MDBBtn> 
        
      </MDBCardBody>
    </MDBCard>
  );
}