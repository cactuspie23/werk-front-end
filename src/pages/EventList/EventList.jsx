import EventCard from "../../components/EventCard/EventCard";

const EventList = (props) => {
  return (
    <main>
      {props.events.map(event => (
        <EventCard event={event} key={event._id}/>
      ))}
    </main>
  )
}

export default EventList