import React, { useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import Featured from "../Popular-services/popular";
import Services from "../Services/services";
import './home.css';


const Home= () =>{
    const [popular,setPopular] = useState([]);
    useEffect(() =>{
        fetch('popular-services.JSON')
        .then(res => res.json())
        .then(data => setPopular(data));
    },[]);
    
    return(
        
         <div>
            <div className='home'>
    
           <h1 className='home-text'>Start Painting With PaintingPro</h1>
           <p className='home-text'>Expertise your painting skills from renowned painters</p>
           <Link to='/services'><Button variant='dark'>Explore More</Button></Link>
        </div>
        <div className='popular-service'>
            <h2 style={{color: 'blue'}}>Popular Services</h2>
            <div className='popular'>
                {
                    popular.map( featured => <Featured
                    key={popular.id}
                    featured={featured}></Featured>)

                }
            </div>
        </div>
        <div className="vote">
            <p className='vote-text'>You can vote us here</p>
            <Form.Control size="lg" type="text" placeholder="comment" />
            <Button variant='dark'>Submit</Button>
        </div>
         </div>
    );
};

export default Home;
