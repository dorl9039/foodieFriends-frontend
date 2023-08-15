import './ViewToggle.css'

const ViewToggle = ({isToggled, onToggle}) => {

  return (
    <label className='toggle-switch'>
      <input type='checkbox' checked={isToggled} onChange={onToggle} />
      <span className='switch' />
    </label>

  )
}

export default ViewToggle;