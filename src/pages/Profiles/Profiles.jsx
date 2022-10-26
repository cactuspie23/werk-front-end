import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as profileService from '../../services/profileService'

const Profiles = ({user}) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  const [form, setForm] = useState({ 
    date: '',
    logEntry: '',
    skills: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }
  
  const handleAddLog = async (logData) => {
    const newLog = await profileService.createLog(logData)
    setProfiles({ ...profiles, myLogs: [...profiles.myLogs, newLog] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddLog(form)
    setForm({    
      date: '',
      logEntry: '',
      skills: '',
    })
  }

  return (
    <>
      <h1>{user.name}</h1>

      <form onSubmit={handleSubmit}>
      <input
        required
        type="date"
        name="date"
        id="date-input"
        value={form.date}
        onChange={handleChange}
      />
      <textarea
        required
        type="text"
        name="logEntry"
        id="logEntry-input"
        value={form.logEntry}
        placeholder="Add a Log"
        onChange={handleChange}
      />
      <textarea
        type="text"
        name="skills"
        id="skills-input"
        value={form.skills}
        placeholder="Skills"
        onChange={handleChange}
      />
      <button type="submit" >Submit</button>
    </form>
    </>
  )
}

export default Profiles