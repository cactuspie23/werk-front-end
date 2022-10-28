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
      <section>
        <h1>Job Detail</h1>
      </section>
      <section className={styles.container}>
      <article>
        <h1>{job.jobTitle}</h1>
        <h3>Company: {job.companyName}</h3>
        <h3>Website: <Link>{job.url}</Link></h3>
        <h3>Details: {job.JobDetails}</h3>
        {job.skills ? <h3>Skills: {job.skills}</h3> : ""}
      </article>
      <span>
        {job.owner._id === props.user.profile &&
          <>
            <Link to={`/jobs/${id}/edit`} state={job}>Edit</Link>
            <button onClick={() => props.handleDeleteJob(id)}>Delete</button>
          </>
        }
      </span>
      </section>
    </main>
  )
}

export default JobDetails