import { useState, useEffect } from 'react'
import styles from './Profile.module.css'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <main className={styles.container}>
      <nav>
        <h1>My Jobs</h1>
      </nav>
        
    </main> 
  )
}

export default Profiles