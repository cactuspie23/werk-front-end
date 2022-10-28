import { useState, useRef, useEffect } from "react"

const NewEvent = (props) => {
  const [eventForm, setEventForm] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
  })

  const [validForm, setValidForm] = useState(false)

  const handleChange = ({target}) => {
    setEventForm({...eventForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddEvent(eventForm)
  }

  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [eventForm])

  return (
    <main>
      <div class='form-title'>
        <h1>Add Event</h1>
      </div>
      <div class='input-form'>
        <form onSubmit={handleSubmit} ref={formElement}>
            <label htmlFor="name-input">Event Name</label>
            <input 
              required 
              type="text"
              name="name"
              autoComplete="off"
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
            autoComplete="complete"
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
            autoComplete="off"
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

export default NewEvent