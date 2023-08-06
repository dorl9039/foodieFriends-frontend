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

export const LoginBox = ({open, handleClose, handleSubmit}) => {
    const [loginFormData, setLoginFormData] = useState(kLoginFormInitialState)

    const onLoginFormChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setLoginFormData(prev => ({
            ...prev, [name]: value
        }));
    }

    const onLoginSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit fired');
        handleSubmit(loginFormData);
        setLoginFormData(kLoginFormInitialState);
        handleClose()
    }

    return (
        <Modal 
            className='login-modal__container' 
            open={open} 
            onClose={handleClose} 
            slots={{backdrop: StyledBackdrop}}>                  
                <form className='modal' onSubmit={onLoginSubmit}>
                    <label htmlFor='loginUsername'>Username</label>
                    <input
                        className='login__field'
                        type='text'
                        name='username'
                        value={loginFormData.username}
                        onChange={onLoginFormChange}
                    />
                    <label htmlFor='loginPassword'>Password</label>
                    <input
                        className='login__field'
                        type='password'
                        name='password'
                        value={loginFormData.password}
                        onChange={onLoginFormChange}
                    />
                    <input type='Submit'/>
                </form>
        </Modal>
    )
};

export default LoginBox;