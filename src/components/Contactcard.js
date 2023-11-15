import React from "react";
import user from '../Image/user.png';
const CardContact =(props)=>{
    const{id ,name, email} = props.contact;
return(
    <div className='item'>
        <img className="ui avatar image" src={user}></img>
    <div className='content'>
        <div className='header'>
            <div>{name}</div>
            <div>{email}</div>
        </div>
        
    </div>
    <i className="trash alternate outline icon"
    onClick={()=> props.clickHandler(id)}
    ></i>
</div>
)
};
export default CardContact;