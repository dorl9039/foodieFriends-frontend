import {useState, forwardRef, useEffect} from 'react';
import Modal from '@mui/base/Modal';
import FormControl, {useFormControlContext} from "@mui/base/FormControl"
import { styled } from '@mui/system';
import clsx from 'clsx';
import './Login.css';

const Backdrop = forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
      <div
        className={clsx({ 'MuiBackdrop-open': open }, className)}
        ref={ref}
        {...other}
      />
    );
  });

Backdrop.displayName = 'Backdrop'

const StyledBackdrop = styled(Backdrop)`
z-index: -1;
position: fixed;
inset: 0;
background-color: rgb(0 0 0 / 0.5);
-webkit-tap-highlight-color: transparent;
`;


const kLoginFormInitialState = {
    username: '',
    password: '',
}
const Login = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);
    const [loginFormData, setLoginFormData] = useState(kLoginFormInitialState)

    const handleLoginFormChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setLoginFormData(prev => ({
            ...prev, [name]: value
        }));
    }
    console.log('loginFormdData:',loginFormData)
    const signIn = (e) => {
        e.preventDefault()
        const str = `${import.meta.env.VITE_SERVER_URL}/auth/google`
        window.open(str, '_self')
    }
    return (
        <div>
            <h2>FoodieFriends</h2>
            <sub>Track the restaurants you want to try out, and find friends to go with you!</sub>
            <div className='signin-options__container'>
                <button onClick={handleLoginOpen}>Sign in with username</button>
                <Modal 
                className='login-modal__container' 
                open={loginOpen} 
                onClose={handleLoginClose} 
                slots={{backdrop: StyledBackdrop}}>                  
                    <form className='modal'>
                        <label htmlFor='loginUsername'>Username</label>
                        <input
                            className='login__field'
                            type='text'
                            name='username'
                            value={loginFormData.username}
                            onChange={handleLoginFormChange}
                        />
                        <label htmlFor='loginPassword'>Password</label>
                        <input
                            className='login__field'
                            type='password'
                            name='password'
                            value={loginFormData.password}
                            onChange={handleLoginFormChange}
                        />
                        <button onClick={handleLoginClose}> Done </button>
                    </form>
                </Modal>
                <h4> Register </h4>
                <button onClick={signIn}> Sign in with Google</button>
            </div>
        </div>

            
    )
};



export default Login;