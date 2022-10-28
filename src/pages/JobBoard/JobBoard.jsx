import styles from "./JobBoard.module.css"
import JobCard from "../../components/JobCard/JobCard"
import { Link } from "react-router-dom"

const JobBoard = ({jobs}) => {
  return (
    <main>
      <header className={styles.jobHeader}>
      <h1>Job Board</h1>
      <div>
        <Link to='/addjob'>
          <button>Add Job</button>
        </Link>
      </div>
      </header>
      <article className={styles.container}>
        {jobs.map(job => (
          <JobCard job={job} key={job._id} />
        ))}
      </article>
    </main>
  )
}

export default JobBoard