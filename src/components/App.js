import React from "react";
import Header from './Header';
import AddContact from './Addcontact';
import ContactList from './ContactList';
import './App.css';
function App() {
//render a list 
const contacts =[
  {
  id:"1",
  "name":"Nikhil",
  "email":"Nikhil@gmail.com",
  },
  {
    id:"2",
    "name":"Aman",
    "email":"Aman@gmail.com",
    }
];

  return (
  
     <div className="ui container">
     <Header />
     <AddContact  />
    <ContactList contacts={contacts} /> 
   </div>
  );
}
export default App;
