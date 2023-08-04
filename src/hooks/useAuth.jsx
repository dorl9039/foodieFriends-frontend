import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useState, createContext } from 'react';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        loggedIn: null,
    });

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/account`, {withCredentials: 'include'})
        .then(res => {
            console.log('here is res', res)
            setUser({...res.data})
        })
    }, [])

    console.log('user in useAuth', user)
    return (
        
        <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    ) 
};

export const useAuth = () => useContext(AuthContext)


export default AuthProvider