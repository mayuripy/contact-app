import React from 'react';
import user from "../images/user.png"

const Contactcard = (props) => {
  const{id,name,email} = props.contact;
  console.log(props.contact)
    return(
        <div className="item">
          <img className="ui avater image" src={user?user:''} alt="user"/>
       <div className="contact">
         <div className="header"> {name}</div>
         <div>{email}</div>

         </div>
         <i className="trash alternate outline icon"
         style={{ color:"red", marginTop:"7px" }}
         onClick={() => props.clickHander(id)}
         ></i>
       </div>
    );
};

export default Contactcard;