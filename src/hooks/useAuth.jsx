import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useState, createContext } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({
		loggedIn: null,
	});

	const handleUsernameUpdate = (username) => {
		setUser(prev => ({
			...prev, username: username
			})
		);
	};

	const handleUserUpdate = (user) => {
		setUser(user);
	};

	useEffect(() => {
		axios.get(`${import.meta.env.VITE_SERVER_URL}/account`, {withCredentials: 'include'})
		.then(res => {
			setUser({...res.data});
		})
		.catch(err => {
			console.log("Error in AuthProvider useEffect", err)
		});
	}, []);

	return (
			<AuthContext.Provider value={{user, handleUsernameUpdate, handleUserUpdate}}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);


export default AuthProvider;