import React, { userstat, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Addcontact from  "./components/Addcontact";
import Contactlist from "./components/Contactlist";

function App() {
  const[contacts, setContact]= useState([])
  
  return( 
  <div className="ui container">
    <Header />
    
    {/* <Addcontact addcontactHandaler={addcontactHandler} /> */}
    <Addcontact />
    
  <Contactlist contacts={contacts} />
  </div>
  ); 
  
}

export default App;
