import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as jobService from '../../services/jobService'
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
      <article>
        <h1>{job.jobTitle.toUpperCase()}</h1>
        <h3>Company: {job.companyName}</h3>
        <h3>Website: <Link>{job.url}</Link></h3>
      </article>
      <span>
        {job.owner._id === props.user.profile &&
          <>
            <Link to={`/jobs/${id}/edit`} state={job}>Edit</Link>
            <button onClick={() => props.handleDeleteJob(id)}>Delete</button>
          </>
        }
      </span>
    </main>
  )
}

export default JobDetails