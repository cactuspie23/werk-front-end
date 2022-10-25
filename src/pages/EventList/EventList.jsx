import { Link } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard"

const EventList = ({events}) => {
  return (
    <main>
      <Link to='/events/new'>
        <button>Add Event</button>
      </Link>
      {events.map(event => (
        <EventCard event={event}/>
      ))}
    </main>
  )
}

export default EventList