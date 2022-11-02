import React from 'react';
import { link} from "react-router-dom";
import user from "../images/user.png"

const Contactcard = (props) => {
  const{id,name,email} = props.contact;
  
    return(
        <div className="mail">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">mayuri</div>
                    <div className="description">chaudharimayuri@gmail.com</div>
                </div>
            </div>
        </div>
    );
};

export default Contactcard;