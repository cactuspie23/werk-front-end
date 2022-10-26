import styles from "./JobBoard.module.css"
import JobCard from "../../components/JobCard/JobCard"
import { Link } from "react-router-dom"

const JobBoard = ({jobs}) => {
  return (
    <main>
      <h1>Job Board</h1>
      <Link to='/addjob'>
        <button>Add Job</button>
      </Link>
      <article className={styles.container}>
        {jobs.map(job => (
          <JobCard job={job} key={job._id} />
        ))}
      </article>
    </main>
  )
}

export default JobBoard