import React, { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
        setUsername('');
        setPassword('');
    }
  return (
    <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <br />
        <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  )
}

export default Login