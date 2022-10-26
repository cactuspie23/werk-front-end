import styles from "./JobBoard.module.css"
import JobCard from "../../components/JobCard/JobCard"
import { Link } from "react-router-dom"

const JobBoard = ({jobs}) => {
  return (
    <main className={styles.container}>
      <h1>Job Board</h1>
      <Link to='/addjob'>
        <button>Add Job</button>
      </Link>
      {jobs.map(job => (
        <JobCard job={job} key={job._id} />
      ))}
    </main>
  )
}

export default JobBoard