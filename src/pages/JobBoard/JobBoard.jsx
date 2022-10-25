import styles from "./JobBoard.module.css"
import { Link } from "react-router-dom"

const JobBoard = ({jobs}) => {

  return (
    <main>
      {jobs.map(job => (
        <Link to={`/jobs/${job._id}`}>
          <h1>{job.jobTitle}</h1>
        </Link>
      ))}
    </main>
  )
}

export default JobBoard