
const EventCard = ({ event }) => {
  const date = new Date(event.date).toLocaleDateString()
  return (
    <>
      <h1>{event.name}</h1>
      <h3>{date}</h3>
      <h3>{event.time}</h3>
      <h3>{event.location}</h3>
      <h4>{event.description}</h4>
    </>
  )
}

export default EventCard