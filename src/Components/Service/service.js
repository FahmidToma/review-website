import React from "react";
import './service.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const Service= (props) =>{
    const {name,price,cover} = props.service;
    return(

            <div className='service-info'>
               <img src={cover}/>
               <h3>{name}</h3>
               <h4>Price: ${price}</h4>
               <Button variant='success'>Enroll Now!</Button>
            </div>
    );
};
export default Service;