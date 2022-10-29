import React, { useState, useEffect, useInsertionEffect } from "react";
import{ v4 as uuidv4 } from 'uuid';
import "./App.css";
import Header from "./components/Header";
import Addcontact from  "./components/Addcontact";
import Contactlist from "./components/Contactlist";

function App() {
  const LOCAL_STORAGE_KEY = "CONTACTS";

  const [contacts, setContacts]= useState([])

  const addcontactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{id: uuidv4(), ...contact}]);
  };

  const removecontact = (id) => {
    const newContactlist =contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactlist);
  }

  useEffect(() => {
   const retriveContacts =  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  }, [contacts]);


  // useInsertionEffect(() => {
  //   localStorage.setItem((LOCAL_STORAGE_KEY,JSON.stringify(contact)));
  // }, [contacts]);


  return( 
  <div className="ui container">
    <Header />
    
     <Addcontact contacts={contacts} addcontactHandler={addcontactHandler}/>
    
    
  <Contactlist contacts={contacts} getcontactId = {removecontact}/>
  </div>
  ); 
  
};

export default App;
