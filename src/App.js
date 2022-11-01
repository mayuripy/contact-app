import React, { useState, useEffect, useInsertionEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header";
import Addcontact from "./components/Addcontact";
import Contactlist from "./components/Contactlist";

function App() {
  const LOCAL_STORAGE_KEY = "CONTACTS";

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('CONTACTS')) ?? []);

  const addcontactHandler = (contact) => {
    // console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    console.log(contacts);
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(contacts)
    );
  };

  const removecontact = (id) => {
    const newContactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactlist);
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(contacts)
    );
  };

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(contacts)
    );
  
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            exact path="/"
            element={
              <Contactlist
                contacts={contacts}
                removecontact={removecontact}
              />
            }
          />
          <Route
            exact path="/add"
            element={
              <Addcontact contacts={contacts} addcontactHandler={addcontactHandler} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
