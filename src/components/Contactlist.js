import React from 'react'
import Contactcard from "./Contactcard.js";

const Contactlist = (props) => {
  console.log(props);

  const deleteContactHandler = (id) =>{
    props.getcontactId(id);
  }

  const renderContactlist= props.contacts.map((contact) => {
    return(
      <Contactcard contact={contact} clickHander ={deleteContactHandler}/>
    );
  });
  

  return (
<div className="ui celled list">{renderContactlist}</div>)
};

export default Contactlist;
