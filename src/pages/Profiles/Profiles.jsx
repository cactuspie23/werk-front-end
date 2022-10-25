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
      <div className='profile-page'>
        <nav>
          <h1>My Jobs</h1>
        </nav>
        <section>
          <h1>Applied</h1>
          <h1>Not Applied</h1>
        </section>
      </div>
    </main> 
  )
}

export default Profiles