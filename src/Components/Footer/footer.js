import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './footer.css';


const Footer= () =>{

    const addIcon= <FontAwesomeIcon icon={faFacebook}/>
    return(
        <div className='footer'>
            <h2>Follow Us</h2>
            <p className="icons">{addIcon}      {<FontAwesomeIcon icon={faInstagram}/>}  <FontAwesomeIcon icon={faYoutube}/>  <FontAwesomeIcon icon={faTwitter}/></p>

        </div>
    );
};
export default Footer;