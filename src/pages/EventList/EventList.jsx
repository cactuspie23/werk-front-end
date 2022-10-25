import { Link } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard"

const EventList = ({events}) => {
  return (
    <main>
      <Link to='/events/new'>
        <button>Add Event</button>
      </Link>
      {events.map(event => (
        <>
          <EventCard event={event}/>
          <Link to='/events/:id/edit'>
            <button>Update Event</button>
          </Link>
        </>
      ))}
    </main>
  )
}

export default EventList