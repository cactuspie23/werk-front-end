// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import EventList from './pages/EventList/EventList'
import NewEvent from './pages/NewEvent/NewEvent'
import EditEvent from './pages/EditEvent/EditEvent'
import JobBoard from './pages/JobBoard/JobBoard'
import AddJob from './pages/AddJob/AddJob'
import JobDetails from './pages/JobDetails/JobDetails'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as eventService from './services/eventService'
import * as jobService from './services/jobService'

// styles
import './App.css'

const App = () => {
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const [jobs, setJobs] = useState([])


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }


  const handleAddEvent = async (eventData) => {
    const newEvent = await eventService.create(eventData)
    setEvents([newEvent, ...events])
    navigate('/events')
  }

  const handleUpdateEvent =async (eventData) => {
    const updatedEvent = await eventService.update(eventData)
    const updatedEventsData = events.map(event => {
      return eventData._id === event._id ? updatedEvent : event
    })
    setEvents(updatedEventsData)
    navigate('/events')
  }

  useEffect (() => {
    const fetchAllEvents = async () => {
      const eventData = await eventService.index()
      setEvents(eventData)
    }
    if (user) fetchAllEvents()
  }, [user])

  const handleAddJob = async (jobdata) => {
    const newJob = await jobService.create(jobdata)
    setJobs([newJob, ...jobs])
    navigate('/jobs')
  }

  useEffect(() => {
    const fetchAllJobs = async () => {
      const jobData = await jobService.index()
      setJobs(jobData)
    }
    if (user) fetchAllJobs()
  }, [user])


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/jobs"
          element={
            <ProtectedRoute user={user}>
              <JobBoard jobs={jobs} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/addjob"
          element={
            <ProtectedRoute user={user}>
              <AddJob handleAddJob={handleAddJob} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <ProtectedRoute user={user}>
              <JobDetails user={user} /> 
            </ProtectedRoute>
          }
        />
        <Route 
          path="/resources"
        />
        <Route 
          path="/events"
          element={
            <ProtectedRoute user={user}>
              <EventList events={events} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/new"
          element={
            <ProtectedRoute user={user}>
              <NewEvent handleAddEvent={handleAddEvent}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="events/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditEvent handleUpdateEvent={handleUpdateEvent} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
