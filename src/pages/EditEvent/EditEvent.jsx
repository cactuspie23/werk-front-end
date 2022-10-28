import { useState, useRef, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import * as eventService from '../../services/eventService'

const EditEvent = (props) => {
  const loc = useLocation()
  const navigate = useNavigate()
  const [eventForm, setEventForm] = useState({
    name: loc.state.event.name,
    date: loc.state.event.date,
    time: loc.state.event.time,
    location: loc.state.event.location,
    description: loc.state.event.description,
  })
  const [validForm, setValidForm] = useState(false)
  const handleChange = evt => {
    setEventForm({ ...eventForm, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleUpdateEvent(eventForm)
  }

  const handleUpdateEvent = async () => {
    const updatedEvent = await eventService.update(loc.state.event._id, eventForm)
    const updatedEventsData = props.events.map(event => {
      return event._id === updatedEvent._id ? updatedEvent : event
    })
    props.setEvents(updatedEventsData)
    navigate('/events')
  }

  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [eventForm])

  console.log('THIS IS EVENT FORM', eventForm);

  return (
    <main>
      <div class='form-title'>
        <h1>Edit Event</h1>
      </div>
      <div class='input-form'>
        <form onSubmit={handleSubmit} ref={formElement}>
          <label htmlFor="name-input" >Event Name</label>
          <input 
            required 
            type="text"
            name="name"
            id="name-input"
            value={eventForm.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="date-input">Event Date</label>
          <input 
            required 
            type="date"
            name="date"
            id="date-input"
            value={eventForm.date}
            onChange={handleChange}
          />
          <label htmlFor="time-input">Event Time</label>
          <input 
            required 
            type="time"
            name="time"
            id="time-input"
            value={eventForm.time}
            onChange={handleChange}
          />
          <label htmlFor="location-input">Location</label>
          <input 
            required 
            type="text"
            name="location"
            id="location-input"
            value={eventForm.location}
            placeholder="Location"
            onChange={handleChange}
          />
          <label htmlFor="description-input">Description</label>
          <textarea 
            required 
            type="text"
            name="description"
            id="description-input"
            value={eventForm.description}
            placeholder="Description"
            onChange={handleChange}
          />
          <div class='submit-button'>
            <button type="submit" disabled={!validForm}>Submit</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default EditEvent