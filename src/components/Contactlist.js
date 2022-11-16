import React from "react";
import { Link } from "react-router-dom";
import Contactcard from "./Contactcard.js";

const Contactlist = (props) => {

  console.log(props.Contacts[0]);
  // const contacts = props.contacts[0].id;

  const deleteContactHandler = (id) => {
    props.removecontact(id);
  };

  const renderContactList = props.Contacts.map((Contact) => {
    return (
      <Contactcard
        Contact={Contact}
        clickHander={deleteContactHandler}
        key={Contact.id}
      />
    );
  });
    const getSerchTerm =() => {
      props.getSerchKeyword (inputEl.currrent.value);
    }

  return (
    <div style={{marginTop: '50px'}} className="main">
      <h2>
        Contact list
        <Link to="/add">
          <button style={{marginRight: '10px', marginLeft: '10px'}} className="ui button blue right"> Add contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input ref={inputEl} type ="text"placeholder="search contacts" className="propt" value={props.term} oncharge/>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0 ? rendercontactlist:"No contacts available"}
      </div>
    </div>
  );
};

export default Contactlist;
