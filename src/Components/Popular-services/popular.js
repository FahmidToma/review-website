import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './popular.css';
 
const Featured= (props) =>{
    const {cover,name,price}= props.featured;
    return(
        <div className='featured-popular'>
            <Container>
            <Row>
                <Col><img src={cover}/>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4></Col>
            </Row>
            </Container>
            
            
            
        </div>
    );
};
export default Featured;