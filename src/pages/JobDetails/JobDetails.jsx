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

  return (
    <main>
      <article>
        <header>
          <h3>{job.jobTitle.toUpperCase()}</h3>
          <h1>{job.company}</h1>
          <span>
            {job.owner._id === props.user.profile &&
              <>
                <Link to={`/jobs/${id}/edit`} state={job}>Edit</Link>
                <button onClick={() => props.handleDeleteJob(id)}>Delete</button>
              </>
            }
          </span>
        </header>
        <p>{job.url}</p>
      </article>
    </main>
  )
}

export default JobDetails