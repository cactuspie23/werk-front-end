import styles from "./JobBoard.module.css"

const JobBoard = (props) => {

  return (
    <main>
      {props.jobs.map(job => (
        <h1>hey</h1>
      ))}
    </main>
  )
}

export default JobBoard