import React from "react";
import './about.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from './works.jpg';
import loGo from './history.jpg';
import paint from './painter.jpg';
import { Link } from "react-router-dom";

 const About= () =>{
     const buttonStyle= { border: '2px solid white',
        borderRadius: '8px'}
     return(
         <div>
            <div  className='about-us'>
            <h1 className='title'>About Us</h1>
             <p className='text'>We give you the best teachers around the world</p>
             <p>Hope you like it!</p>
             <Link to='/*'><Button className='view' variant='light'>View More</Button></Link>
            </div>
             <Container>
            <Row className="our-works">
                <Col xs={12} md={8} className='cul'>
                <h2 style={{color: 'white'}}>Our Works</h2>
                    <p style={{color: 'white'}} className='text'>We have worked on many popular projects till now and got good response.We hope you enjoy it</p>
                    <Link to='/*'><Button style={buttonStyle} variant='dark'>More</Button></Link>
                </Col>
                <Col xs={6} md={4}>
                <img src={logo}/>
                </Col>
            </Row>
            </Container>
             <Container>
            <Row className="our-works">
            <Col xs={6} md={4}>
                <img src={loGo}/>
                </Col>
                <Col xs={12} md={8} className='cul'>
                <h2 style={{color: 'white'}}>Art History</h2>
                    <p style={{color: 'white'}} className='text'>Art is part of our life from the ancient times and it has created many new oppurtunitites for us that helps us to express ourselves</p>
                    <Link to='/*'><Button style={buttonStyle} variant='dark'>More</Button></Link>
                </Col>
                
            </Row>
            </Container>
             <Container>
            <Row className="our-works">
                <Col xs={12} md={8} className='cul'>
                <h2 style={{color: 'white'}}>Experts</h2>
                    <p style={{color: 'white'}} className='text'>We have worked on many popular projects till now and got good response.We hope you enjoy it.Both male and female experts are available</p>
                    <Link to='/*'><Button style={buttonStyle} variant='dark'>More</Button></Link>
                </Col>
                <Col xs={6} md={4}>
                <img src={paint}/>
                </Col>
            </Row>
            </Container>
         </div>
     );
 };
 export default About;