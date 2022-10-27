import React from 'react'

const Contactlist = (props) => {
  console.log(props);

  const renderContactlist= props.Contacts.map(contact => {
    return(
      <div className="item">
       <div className="contact">
         <div className="header"> {contact.name}</div>
         <div>{contact.email}</div>
         </div>
         <i className="trash alternate outline icon"></i>
       </div>
    );
  });
  

  return (
<div className="ui celled list">{renderContactlist}</div>)
};

export default Contactlist;
