import React from "react";
import { Link } from "react-router-dom";
import Contactcard from "./Contactcard.js";

const Contactlist = (props) => {

  console.log(props.contacts[0]);
  // const contacts = props.contacts[0].id;

  const deleteContactHandler = (id) => {
    props.removecontact(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <Contactcard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <h2>
        Contact list
        <Link to="/add">
          <button className="ui button blue right"> Add contact</button>
        </Link>
      </h2>
      <div className="ui celled list">
        {renderContactList}
      </div>
    </div>
  );
};

export default Contactlist;
