import React from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react'

const Profile = () => {
    const {user} = useContext(UserContext);
  
    if(!user) return <div>Please Login to continue</div>
    
    return <div>Welcome {user.username} your password is {user.password}</div>
} 

export default Profile