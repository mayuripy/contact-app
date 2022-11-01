import React from "react";
import { Link } from "react-router-dom";
import Contactcard from "./Contactcard.js";

const Contactlist = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.removecontact(id);
  };

  const renderContactlist = props.contacts.map((contact) => {
    return (
      <Contactcard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div style={{marginTop: '50px'}} className="main">
      <h2>
        Contact list
        <Link to="/add">
          <button className="ui button blue right"> Add contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactlist}</div>
    </div>
  );
};

export default Contactlist;
