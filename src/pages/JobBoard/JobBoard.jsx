import styles from "./JobBoard.module.css"
import JobCard from "../../components/JobCard/JobCard"
import { Link } from "react-router-dom"

const JobBoard = ({jobs}) => {
  return (
    <main>
      <div className={styles.jobHeader}>
        <h1>Job Board</h1>
        <div>
          <Link to='/addjob'>
            <div class='btn'>
              <button>Add Job</button>
            </div>
          </Link>
        </div>
      </div>
      <article className={styles.container}>
        {jobs.map(job => (
          <JobCard job={job} key={job._id} />
        ))}
      </article>
    </main>
  )
}

export default JobBoard