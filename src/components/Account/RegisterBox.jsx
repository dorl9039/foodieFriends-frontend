import {useState, forwardRef, useEffect} from 'react';
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

const kFormInitialState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
}

export const RegisterBox = ({open, handleClose, handleSubmit}) => {
    const [formData, setFormData] = useState(kFormInitialState)

    const onFormChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setFormData(prev => ({
            ...prev, [name]: value
        }));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit fired');
        handleSubmit(formData);
        setFormData(kFormInitialState);
        handleClose()
    }

    return (
        <Modal 
            className='login-modal__container' 
            open={open} 
            onClose={handleClose} 
            slots={{backdrop: StyledBackdrop}}>                  
                <form className='modal' onSubmit={onSubmit}>
                    <label htmlFor='registerUsername'>Username</label>
                    <input
                        className='login__field'
                        type='text'
                        name='username'
                        value={formData.username}
                        onChange={onFormChange}
                    />
                    <label htmlFor='registerPassword'>Password</label>
                    <input
                        className='login__field'
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={onFormChange}
                    />
                    <label htmlFor='registerFirstName'>First name</label>
                    <input
                        className='login__field'
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={onFormChange}
                    />
                    <label htmlFor='registerLastName'>Last name</label>
                    <input
                        className='login__field'
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        onChange={onFormChange}
                    />
                    <label htmlFor='registerEmailName'>Email</label>
                    <input
                        className='login__field'
                        type='text'
                        name='email'
                        value={formData.email}
                        onChange={onFormChange}
                    />
                    <input type='Submit' value='Create account'/>
                </form>
        </Modal>
    )
};

export default RegisterBox;