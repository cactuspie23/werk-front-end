
const MyLogs = (props) => {
  if (!props.myLogs) return <h4>No Logs Yet</h4>

  return (
    <>
      {props.myLogs.map(log => (
        <article key={log._id} >
          <h3>{new Date(log.date).toLocaleDateString()}</h3>
          <p>Log: {log.logEntry}</p>
          {log.skills ? <p>New Skills: {log.skills}</p> : ""}
          <button onClick={() => props.handleDeleteLog(log._id)}>Delete</button>
        </article>
      ))}
    </>
  )
}

export default MyLogs