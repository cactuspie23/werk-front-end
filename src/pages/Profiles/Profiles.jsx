import { useState, useEffect } from 'react'
import styles from './Profiles.module.css'
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

    </main> 
  )
}

export default Profiles