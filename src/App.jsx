// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import JobBoard from './pages/JobBoard/JobBoard'
import AddJob from './pages/AddJob/AddJob'
import JobDetails from './pages/JobDetails/JobDetails'
import ResourceList from './pages/ResourceList/ResourceList'
import AddResource from './pages/AddResource/AddResource'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as jobService from './services/jobService'
import * as resourceService from './services/resourceService'

// styles
import './App.css'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [jobs, setJobs] = useState([])
  const [resources, setResources] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddJob = async (jobdata) => {
    const newJob = await jobService.create(jobdata)
    setJobs([newJob, ...jobs])
    navigate('/jobs')
  }

  const handleAddResource = async (resourceData) => {
    const newResource = await resourceService.create(resourceData)
    setResources ([newResource, ...resources])
    navigate('/resources')
  }

  useEffect(() => {
    const fetchAllJobs = async () => {
      const jobData = await jobService.index()
      setJobs(jobData)
    }
    if (user) fetchAllJobs()
    
    const fetchAllResources = async () => {
      const resourceData = await resourceService.index()
        setResources(resourceData)
      }
      if (user) fetchAllResources()
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
          element={
            <ProtectedRoute user={user}>
              <ResourceList resources={resources} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/addresource"
          element={
            <ProtectedRoute user={user}>
              <AddResource handleAddResource={handleAddResource} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/events"
        />
      </Routes>
    </>
  )
}

export default App
