import Modal from '@mui/base/Modal';
import StyledBackdrop from './StyledBackdrop';
import './ConfirmationModal.css'

const ConfirmationModal = ({open, handleClose, message}) => {
  return (
    <Modal
      className="general-modal__container"
      open={open}
      onClose={handleClose}
      slots={{backdrop: StyledBackdrop}}>
        <div className='general-modal__content'>
          <h3> {message} </h3>
          <button onClick={handleClose}>Got it</button>
        </div>	
    </Modal>
  )
}	

export default ConfirmationModal;