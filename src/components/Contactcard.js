import React from "react";
import user from '../Image/user.png';
const CardContact =(props)=>{
    const{id ,name, email} = props.contact;
    console.log(id , "abs");
return(
    <div className='item'>
        <img className="ui avatar image" src={user} alt="user"></img>
    <div className='content'>
        <div className='header'>{name}</div>
            <div>{email}</div>
    </div>
    <i className="trash alternate outline icon"
    onClick={()=> props.clickHandler(id)}
    ></i>
</div>
)
};
export default CardContact;