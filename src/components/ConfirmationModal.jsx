import Modal from '@mui/base/Modal';
import StyledBackdrop from './StyledBackdrop';

const ConfirmationModal = ({open, handleClose, message}) => {
  return (
    <Modal
      className="dialog-modal__container"
      open={open}
      onClose={handleClose}
      slots={{backdrop: StyledBackdrop}}>
        <div className='modal'>
          <h3> {message} </h3>
          <button onClick={handleClose}>Got it</button>
        </div>	
    </Modal>
  )
}	

export default ConfirmationModal;