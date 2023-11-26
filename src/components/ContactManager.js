import React, { useState ,useEffect } from "react";
import { v4 as uuid } from 'uuid';
import Header from './Header';
import AddContact from './Addcontact';
import ContactList from './ContactList';
import axios from "axios";
import './CSS/App.css';

function ContactManager() {
//render a list 
    //const contacts =
    //[
    //   {
    //   id:"1",
    //   "name":"Nikhil",
    //   "email":"Nikhil@gmail.com",
    //   },
    //   {
    //     id:"2",
    //     "name":"Aman",
    //     "email":"Aman@gmail.com",
    //     }
    // ];

  //key for local storage
 // const Local_Storage_Key ="contacts";
  const userid =sessionStorage.getItem("userid");
  const [contacts, setContacts]=useState([]);
    //Making use of hook 
    // const [contacts, setContacts] = useState(
    //   JSON.parse(localStorage.getItem(Local_Storage_Key)) ?? []
    // );
  
    //contact from child
    const addcontactHandler = async(contact)=>{  

     await axios.post("http://localhost:3001/contacts", {
        ...contact,
        id: uuid(),
      })  

      setContacts([...contacts,{id:uuid(),...contact} ]);
      // console.log(contacts);
    };

    // const removecontactHandler =async(id)=>
    // {
    //   console.log(id);
    //   const newcontactList = contacts.filter((contact)=>
    //   {
    //     return contact.id !== id
    //   });

    //   setContacts(newcontactList);
    // }
    
    const removecontactHandler = async (id) => {
      try {
        await axios.delete(`http://localhost:3001/contacts/${id}`);
        const newContactList = contacts.filter((contact) => contact.id !== id);
        setContacts(newContactList);
      } catch (error) {
        console.error("Error removing contact:", error.message);
      }
    };


//retrieve
// useEffect(()=>
//     {
//       const retrievecontacts= JSON.parse(localStorage.getItem(Local_Storage_Key ));
//       // console.log(Local_Storage_Key);
//       if(retrievecontacts) setContacts(retrievecontacts);
//     },[]); 

    
 

// Persist data using local storage / to render component whenever value changes 
// useEffect(<function>, <dependency>)


    // useEffect(()=>
    // {
    //   localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts));
    //   // console.log(Local_Storage_Key);
    //   console.log('Initial data stored:', contacts);
    // },[contacts]);         //[contacts] - dependency

//Instead of using localstorage making use of db.json
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/contacts?userid=${userid}`);
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error.message);
      }
    };

    fetchData();
},[userid]);
  return (
  
     <div className="ui container">
      
    <Header />
     <AddContact addcontactHandler = {addcontactHandler}  />
    <ContactList contacts={contacts} getcontactId={removecontactHandler}/> 
   </div>
  );
}
export default ContactManager;







