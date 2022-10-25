import { useState } from "react"

const NewEvent = (props) => {
  const [eventForm, setEventForm] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
  })

  const handleChange = ({target}) => {
    setEventForm({...eventForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddEvent(eventForm)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input 
          required 
          type="text"
          name="name"
          value={eventForm.name}
          placeholder="Name"
          onchange={handleChange}
        />
        <input 
          required 
          type="Date"
          name="Date"
          value={eventForm.date}
          placeholder="Date"
          onchange={handleChange}
        />
        <input 
          required 
          type="Text"
          name="Location"
          value={eventForm.location}
          placeholder="Location"
          onchange={handleChange}
        />
        <input 
          required 
          type="text"
          name="description"
          value={eventForm.description}
          placeholder="Description"
          onchange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewEvent