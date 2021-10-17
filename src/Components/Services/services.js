import React, { useEffect, useState } from "react";
import './services.css';
import Service from "../Service/service";

const Services= () =>{
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./service-info.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return(
        <div>
            <div  className='Our-service'>
            <h1 style={{color:'black'}}>Our Services</h1>
            <h4>Types of paintings that you can learn</h4>
            </div>
            <div className='services'>
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}></Service>)
                }
            </div>
        </div>
    );
};
export default Services;