import { Link } from 'react-router-dom'

const EventCard = (props) => {

  const date = new Date(props.event.date).toLocaleDateString()
  return (
    <>
      <h1>{props.event.name}</h1>
      <h3>{date}</h3>
      <h3>{props.event.time}</h3>
      <h3>{props.event.location}</h3>
      <h4>{props.event.description}</h4>
      {props.event.owner === props.user.profile &&
          <>
            <Link to={`/events/${props.event._id}/edit`} state={props.event}>Edit</Link>
            <button onClick={() => props.handleDeleteEvent(props.event._id)}>Delete</button>
          </>
        }
    </>
  )
}

export default EventCard