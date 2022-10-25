// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import EventList from './pages/EventList/EventList'
import EventDetails from './pages/EventDetails/EventDetails'
import NewEvent from './pages/NewEvent/NewEvent'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as eventService from './services/eventService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [events, setEvents] = useState([])

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

  useEffect (() => {
    console.log('Use Effect all good')
    const fetchAllEvents = async () => {
      console.log("It's fetchin as its supposed to")
      const data = await eventService.index()
      setEvents(data)
    }
  })

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
          path="/job-board"
        />
        <Route 
          path="/resources"
        />
        <Route 
          path="/events"
          element={
            <EventList events={events} />
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
      </Routes>
    </>
  )
}

export default App
