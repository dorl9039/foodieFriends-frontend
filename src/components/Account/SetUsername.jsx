import {useState, forwardRef} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Modal from '@mui/base/Modal';
import { styled } from '@mui/system';
import clsx from 'clsx';

import './RegisterUsername.css'

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

const SetUsername = ({ userId, updateUsername }) => {
  console.log("in RegisterUsername Id", userId)  
  const [formData, setFormData] = useState('')
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleFormChange = (event) => {
        setFormData(event.target.value)
    }

    const onSetUsername = (event) => {
      event.preventDefault();
        axios.patch(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/username`, {username:formData})
        .then(res => {
            updateUsername(res.data.username)
            navigate('/home')
        })
        .catch(err => {
            console.log("error in handleRegisterUsername", err.message)
        })
    }

    return(
        <div>
          <button onClick={handleOpen}>Set username</button>
          <Modal 
            className='login-modal__container' 
            open={open} 
            onClose={handleClose} 
            slots={{backdrop: StyledBackdrop}}>                  
                <form className='modal' onSubmit={onSetUsername}>
                    <label htmlFor='setUsername'>Username</label>
                    <input
                        className='login__field'
                        type='text'
                        name='username'
                        value={formData}
                        onChange={handleFormChange}
                    />
                    <input type='Submit'/>
                </form>
          </Modal>
        </div>
    )
};

export default SetUsername;