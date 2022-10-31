import React from 'react'
import { Link } from 'react-router-dom';
import Contactcard from "./Contactcard.js";

const Contactlist = (props) => {
  console.log(props);

  const deleteContactHandler = (id) =>{
    props.getcontactId(id);
  };
  

  const renderContactlist= props.contacts.map((contact) => {
    return(
      <Contactcard contact={contact} clickHander ={deleteContactHandler} key={contact.id}/>
    );
  });
  

  return (
    <div class="main">
      <h2>
        Contact list
        <link to="/add">
        <button className="ui button blue right"> Add contact</button>
        </link>
      </h2>
<div className="ui celled list">{renderContactlist}</div>)
</div>
  );
};


export default Contactlist;
