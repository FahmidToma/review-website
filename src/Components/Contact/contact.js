import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './contact.css';

 const Contact= () =>{
     const style= {
         color: 'white',
     }

     return(
         <div>
             <div className='contact'>
             <h1 style={style}>Contact Us!</h1>
             <h5 style={style}>Art Is Life</h5>
             <Link to='/*'><Button variant='outline-light' src='/*'>Visit Us</Button></Link>
             <Container>
             <Row className='contacts'>
                <Col xs={6} md={4}>
                <h3 style={style}>Mobile</h3>
                <p style={style}>018467354287 <br></br>017467388287</p>
                </Col>
                <Col xs={6} md={4}>
                <h3 style={style}>Email</h3>
                <p style={style}>abc@gmail.com <br></br>paint.01@yahoo.com</p>
                </Col>
                <Col xs={6} md={4}>
                <h3 style={style}>Head-office</h3>
                <p style={style}>21/B Gulshan <br></br>Dhaka,Bangladesh</p>
                </Col>
            </Row>
             </Container>
             </div>
            
         </div>
     );
 };
export default Contact;