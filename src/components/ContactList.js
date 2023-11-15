import React from 'react';
import ContactCard from './Contactcard';
export default function ContactList(props) {
    console.log(props);

    const renderContactList = props.contacts.map((contact) =>
    {
        // const deletecontacthandler =(id)=>{
        //     props.getContactId(id);
        // };
        
        return(
               <ContactCard 
               contact={contact}
            //    clickHandler={deletecontacthandler}
            //    key={contact.id}
               ></ContactCard>
        );
    });
  return (
    <div className="ui celled list">
      {renderContactList}
    </div>
  )
} 
