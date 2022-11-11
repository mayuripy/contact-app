import React from 'react';

const ContactCard = (props) => {
  // console.log(props)
    return(
        <div className="item">
       <div className="contact">
         <div className="header">
           {props.contact.name}
          </div>
         <div>
          {props.contact.email}
          </div>
         </div>
        <i className="trash alternate outline icon"/>
       
          <i className="trash alternate outline icon"
          style={{ color:"red", marginTop: "7px" }}
          onclick={() => props.clickHander(props.contact.id)}
          />
          </div>

    );
};
export default ContactCard;