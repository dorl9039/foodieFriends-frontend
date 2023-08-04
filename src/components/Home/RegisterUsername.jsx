import {useState} from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './RegisterUsername.css'

const RegisterUsername = ({ userId, updateUsername }) => {
    const [formData, setFormData] = useState('')

    const handleFormChange = (event) => {
        setFormData(event.target.value)
    }

    const onSetUsername = (event) => {
        console.log('inside onSetUsername userId', userId)
        console.log('formData inside onSetUsername', formData)
        axios.patch(`${import.meta.env.VITE_SERVER_URL}/users/${userId}/username`, {username:formData})
        .then(res => {
            console.log('onSetUsername res', res)
            updateUsername(res.data.username)
        })
        .catch(err => {
            console.log("error in handleRegisterUsername", err)
        })
    }

    console.log('formData outside', formData)
    return(
        <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="Button violet">Set username</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">Set username</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Set your username here. Click save when you are done.
            </Dialog.Description>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Username
              </label>
              <input 
                className="Input" 
                id="username" 
                onChange={handleFormChange}
                value={formData}/>
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
              <Dialog.Close asChild>
                <button 
                    className="Button green" 
                    onClick={onSetUsername}>Save changes</button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close" >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    
    )
};

export default RegisterUsername;