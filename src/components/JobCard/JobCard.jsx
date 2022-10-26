import { Link } from "react-router-dom";
import styles from './JobCard.module.css'

const JobCard = ({ job }) => {
  return (
    <Link to={`/jobs/${job._id}`}>
      <article className={styles.container}>
        <h1>{job.jobTitle}</h1>
        <h3>Company: {job.companyName}</h3>
        <p>{job.jobDetails}</p>
      </article>
    </Link>
  )
}

export default JobCard