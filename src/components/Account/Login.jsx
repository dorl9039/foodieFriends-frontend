import {useState, forwardRef} from 'react';
import Modal from '@mui/base/Modal';
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




const Login = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

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
            <button onClick={handleLoginOpen}>Login</button>
            <Modal className='login-modal__container' open={loginOpen} onClose={handleLoginClose} slots={{backdrop: StyledBackdrop}}>
                <div>                    
                    {/* <div className='modal__overlay' aria-hidden="true" />
                    <div className='modal__container'> */}
                        <form className='modal'>
                            <h3 >Login</h3>
                            <button onClick={handleLoginClose}> Done </button>
                        </form>
                    {/* </div> */}
                </div>
                </Modal>
                <h4> Register </h4>
                <button onClick={signIn}> Sign in with Google</button>
            </div>
        </div>

            
    )
};



export default Login;