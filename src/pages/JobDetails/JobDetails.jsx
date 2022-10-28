import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as jobService from '../../services/jobService'
import styles from './JobDetails.module.css'
import { Link } from "react-router-dom"

const JobDetails = (props) => {
  const {id} = useParams()
  const [job, setJob] = useState(null)

  useEffect(()=> {
    const fetchJob = async () => {
      const data = await jobService.show(id)
      setJob(data)
    }
    fetchJob()
  }, [id])

  if(!job) return <main>Loading...</main>

  return (
    <main>
      <div className={styles.details}>
        <section>
          <h1>Job Detail</h1>
        </section>
        <section className={styles.container}>
        <article>
          <h1>{job.jobTitle}</h1>
          <h3 className={styles.label}>Company: </h3>
          <h3 className={styles.data}>{job.companyName}</h3>
          <h3 className={styles.label}>Website: </h3>
          <Link><h3 className={styles.data}>{job.url}</h3></Link>
          <h3 className={styles.label}>Details: </h3>
          <h3 className={styles.data}>{job.jobDetails}</h3>
          {job.skills ? <h3 className={styles.label}>Skills: {job.skills}</h3> : ""}
        </article>
        <span>
          {job.owner._id === props.user.profile &&
            <div class='buttons'>
              <Link to={`/jobs/${id}/edit`} state={job}>
                <div class='btn'>
                  <button className={styles.jobBtn}>Edit</button>
                </div>
              </Link>
              <div class='btn'>
                <button className={styles.jobBtn} onClick={() => props.handleDeleteJob(id)}>Delete</button>
              </div>
            </div>
          }
        </span>
        </section>
      </div>
    </main>
  )
}

export default JobDetails