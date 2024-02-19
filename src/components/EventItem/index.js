import './index.css'

const EventItem = props => {
  const {eventDetails, onSelectEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const onEventClick = () => onSelectEvent(registrationStatus)

  return (
    <li className="event-card-container">
      <button type="button" onClick={onEventClick}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>

      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
