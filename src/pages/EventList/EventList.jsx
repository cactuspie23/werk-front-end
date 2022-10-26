import { Link } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard"
import * as eventService from '../../services/eventService'

const EventList = (props) => {
  console.log('THIS IS id', props.events);
  // console.log('THIS MAY ALSO B ID?', props.eventId)

  const handleDeleteEvent = async (id) => {
    const deletedEvent = await eventService.deleteEvent(id)
    props.setEvents(props.events.filter(evt => evt._id !== deletedEvent._id))
  }

  if(!props.events) return <main>Loading...</main>
  return (
    <main>
      <Link to='/events/new'>
        <button>Add Event</button>
      </Link>
      {props.events.map(event => (
        <>
          <EventCard event={event} handleDeleteEvent={handleDeleteEvent} />
          <Link to={`/events/${event._id}/edit`} state={{event: event}} >
            <button>Edit</button>
          </Link>
        </>
      ))}
    </main>
  )
}

export default EventList