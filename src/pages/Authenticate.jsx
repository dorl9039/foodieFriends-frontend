import {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import './Authenticate.css';
import LoginBox from '../components/Account/LoginBox'
import RegisterBox from '../components/Account/RegisterBox'
import axios from 'axios';


const Authenticate = ({updateUser}) => {
    const navigate = useNavigate();
    
    const [loginOpen, setLoginOpen] = useState(false);
    const [loginFail, setLoginFail] = useState(false)
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleLoginSubmit = (loginData) => {
        axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, loginData, {withCredentials: true})
        .then((res) => {
            updateUser({...res.data, loggedIn: true})
            navigate('/home')
        }, (err) => {
            setLoginFail(true)
            return;
        })  
        .catch(err => ("Error in handleLoginSubmit", err))
    }

    const [registerOpen, setRegisterOpen] = useState(false);
    const handleRegisterOpen = () => setRegisterOpen(true);
    const handleRegisterClose = () => setRegisterOpen(false);

    const handleRegisterSubmit = (registerData) => {
        axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/register`, registerData, {withCredentials: true})
        .then((res) => {
            updateUser({...res.data, loggedIn: true})
            navigate('/home')
        }, (err) => {
            "username or email already exists"
            return false;
            }
        )  
        .catch(err => ("Error in handleRegisterSubmit", err))
    }


    const signIn = (e) => {
        console.log("called signIn")
        e.preventDefault()
        const str = `${import.meta.env.VITE_SERVER_URL}/auth/google`
        window.open(str, '_self')
    }

    return (
        <div>
            <h2>FoodieFriends</h2>
            <sub>Track the restaurants you want to try out, and find friends to go with you!</sub>
            <div className='signin-options__container'>
                {loginFail? <p>The credentials you provided do not match what we have in our system. Please try logging in again</p> : <></>}
                <button onClick={handleLoginOpen}>Sign in with username</button>
                <LoginBox 
                    open={loginOpen}
                    handleClose={handleLoginClose}
                    handleSubmit={handleLoginSubmit} />
                <button onClick={handleRegisterOpen}> Create an account </button>
                <RegisterBox 
                    open={registerOpen}
                    handleClose={handleRegisterClose}
                    handleSubmit={handleRegisterSubmit} />
                <button onClick={signIn}> Sign in with Google</button>
            </div>
        </div>

            
    )
};


export default Authenticate;