import React, { useState, useEffect, useInsertionEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Addcontact from  "./components/Addcontact";
import Contactlist from "./components/Contactlist";

function App() {
  const LOCAL_STORAGE_KEY = "CONTACTS";
  const [contacts, setContacts]= useState([])
  const addcontactHandaler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  useInsertionEffect(() => {
   const retriveconracts =  localStorage.setItem((LOCAL_STORAGE_KEY,JSON.stringify(contact)));
  }, [contacts]);

  useInsertionEffect(() => {
    localStorage.setItem((LOCAL_STORAGE_KEY,JSON.stringify(contact)));
  }, [contacts]);


  return( 
  <div className="ui container">
    <Header />
    
     <Addcontact addcontactHandaler={addcontactHandler}/>
    
    
  <Contactlist contacts={contacts}/>
  </div>
  ); 
  
};

export default App;
