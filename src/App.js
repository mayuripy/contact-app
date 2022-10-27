import React from "react";
import "./App.css";
import Header from "./components/Header";
import Addcontact from  "./components/Addcontact";
import Contactlist from "./components/Contactlist";

function App() {

  const contact =[
    {
      id: "1",
      name: "mayuri",
      email: "mayuri@gmail.com",

    },
    {
      id: "2",
      name: "nishu",
      email: "nishu@gmail.com",

    },
  ]
  return( 
  <div className="ui container">
    <Header />
    {/* Hello */}
    <Addcontact />
    
  <Contactlist contact={contacts} />
  </div>
  ); 
  
}

export default App;
