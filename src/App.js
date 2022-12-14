import React, { useState, useEffect, useInsertionEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api/Contact.js";
import "./App.css";
import Header from "./components/Header";
import Addcontact from "./components/Addcontact";
import Contactlist from "./components/Contactlist";
import Contactdetail from './components/Contactdetail';
// import { uuid } from "uuidv4";
import uuid from 'react-native-uuid';
import Editcontact from "./components/Editcontact.js";
import Contact from "./api/Contact.js";

function App() {
  const LOCAL_STORAGE_KEY = "CONTACTS";

 const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('CONTACTS')) ?? []);
  // const [searchterm,setContacts] =useState("");
  const [searchTerm,setSearchterm] = useState([]);
  const [searchResults,setSearchResults] = useState([]);


  //RetriveContacts
   const RetriveContacts = async ()  => {
    const response =  await api.get("/contacts");
    return response.data;

   }


  const addcontactHandler = async (contact) => {
    console.log(contact);
    const request = { id: uuid.v4(), ...contact};
   
    const response =  await api.post("/contacts",request)
    // console.log(response);
    setContacts([...contacts, response.data]);
    // console.log(contacts);
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(contacts)
    );
  }
    const updatecontactHandler = async (contact) => {
      const response = await api.put('/contacts/${contact.id}', contact)
      const {id,name,email} =response.data;
      setContacts(contacts.map((contact) => {
        return contact.id ===id ?{...response.data} : contact;
      })
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
      const SearchHandler =(searchTerm) =>{
        setSearchterm(searchTerm);
        if(searchTerm !== ""){
          const newContactlist =contacts.filter((contact) => {
           return Object.value(contact).join("").toLowercase().includes(searchTerm.toLowercase());
          });

          setSearchResults(newContactlist);
        }
          else {
            setSearchResults(contacts);
          }
          

      };
  

   

  
  useEffect(() => {
    const getAllContact = async () => {
      await api.delete('/contacts/${id}');
      const allContact = await RetriveContacts();
      if(allContact) setContacts(allContact)
    }
    getAllContact();
  }, [])
  
  



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
                contacts={searchTerm.length < 1?contacts:searchResults}
                removecontact={removecontact}
                term={searchTerm}
                // searchKeyword={SearchHandler}
              />
            }
          />
          <Route
            exact path="/add"
            element={
              <Addcontact contacts={contacts} addcontactHandler={addcontactHandler} />
            }
          />
            <Route
            exact path="/edit"
            element={
              <Editcontact contacts={contacts} updatecontactHandler={updatecontactHandler} />
            }
            
            />
            <Route
              path="/contact/:id" component={<Contactdetail/>}
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
