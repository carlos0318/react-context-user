import React, { useContext } from 'react'
import UserContex from '../context/User/UserContext';

const Profile = () => {
    const { selectedUser } = useContext(UserContex);

    return (
        <>
            { selectedUser ? 
                (<div className='card card-body text-center'>
                    <img src={selectedUser.avatar} alt="" className='card-img-top rounded-circle m-auto img-fluid' style={{width:180}}/>
                    <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                    <h3>{selectedUser.email}</h3>
                </div>) 
                : <h1>No user selected</h1>}
        </>
    )
}

export default Profile;