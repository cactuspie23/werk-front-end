import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link to={`/events/$event._id}`}>
      <h1>{event.name}</h1>
    </Link>
  )
}

export default EventCard