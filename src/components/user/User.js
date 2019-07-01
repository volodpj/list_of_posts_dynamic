import React from 'react';
import styleUser from '../user/styleUser.module.css';

const User = ({user}) => {
    return (
        <div className={styleUser.postAutor}>
            <div><span>Autor</span> {user.name}</div>
            <div><span>email</span>  {user.email}</div>
            <div><span>address</span>  {user.address.city}</div>
        </div> 
    )
}

export default User