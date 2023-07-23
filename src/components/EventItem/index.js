// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, findStatus, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const borderClassName = isActive ? 'border-green' : ''

  const onClickImage = () => {
    findStatus(id)
  }

  return (
    <li className="list-container">
      <button className="button" type="button" onClick={onClickImage}>
        <img
          className={`event-image ${borderClassName}`}
          alt="event"
          src={imageUrl}
        />
      </button>
      <p className="name">{name}</p>
      <p className="name">{location}</p>
    </li>
  )
}

export default EventItem
