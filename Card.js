import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard style={{ maxWidth: '42rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src= 'https://rukminim1.flixcart.com/image/416/416/l51d30w0/mobile/n/y/v/-original-imagfsuftgdf6jxe.jpeg?q=70' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba( 251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>



      
      <MDBCardBody>
        <MDBCardTitle>MOTOROLA g42 (Atlantic Green, 64 GB)  (4 GB RAM)</MDBCardTitle>
        <MDBCardText>
        
         4 GB RAM | 64 GB ROM<br/>
         16.43 cm (6.47 inch) Full HD+ AMOLED Display<br/>
         50MP + 8MP + 2MP | 16MP Front Camera<br/>
         5000 mAh Lithium polymer Battery<br/>
         Qualcomm Snapdragon 680 Processor
        </MDBCardText>
        <MDBBtn href=""  >ADD TO CART</MDBBtn> 
        
      </MDBCardBody>
    </MDBCard>
  );
}