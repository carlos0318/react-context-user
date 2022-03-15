import React, { useEffect } from 'react'
import { useContext } from 'react';
import UserContext from '../context/User/UserContext'

const UserList = () => {
    const { users, getUsers, getProfile } = useContext(UserContext);

    useEffect(()=>{
        getUsers()
    }, []);

    return (
        <div >
            {users.map(user => (
                <a className='list-group-item list-group-item-action d-flex flex-row jusrify-content-start align-items-center' href='#' key={user.id}  alt={user.first_name} onClick={() => getProfile(user.id)}>
                    <img src={user.avatar} className="img-fluid mr-4 rounded-circle" width="70"></img>
                    <p className='ms-4'>{`${user.first_name} ${user.last_name}`}</p>
                </a>
            ))}
        </div>
    )
}

export default UserList;