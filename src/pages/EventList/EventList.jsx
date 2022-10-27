import { Link } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard"
import * as eventService from '../../services/eventService'
import styles from './EventList.module.css'

const EventList = (props) => {
  const handleDeleteEvent = async (id) => {
    const deletedEvent = await eventService.deleteEvent(id)
    props.setEvents(props.events.filter(evt => evt._id !== deletedEvent._id))
  }

  if(!props.events) return <main>Loading...</main>

  return (
    <main >
      <Link to='/events/new'>
        <button>Add Event</button>
      </Link>
      <div className={styles.container} >
        {props.events.map(event => (
          <EventCard event={event} handleDeleteEvent={handleDeleteEvent} user={props.user} />
        ))}
      </div>
    </main>
  )
}

export default EventList