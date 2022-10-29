import React, { useState, useEffect, useInsertionEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Addcontact from  "./components/Addcontact";
import Contactlist from "./components/Contactlist";

function App() {
  const [contacts, setContacts]= useState([])
  const addcontactHandaler = (contact) => {
    console.log(contact);
    setContacts([...contact, contact]);
  };
   
  useInsertionEffect()


  return( 
  <div className="ui container">
    <Header />
    
     <Addcontact addcontactHandaler={addcontactHandler}/>
    
    
  <Contactlist contacts={contacts} />
  </div>
  ); 
  
}

export default App;
