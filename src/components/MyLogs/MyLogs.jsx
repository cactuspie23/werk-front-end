
const MyLogs = (props) => {
  if (!props.myLogs) return <h4>No Logs</h4>

  return (
    <>
      {props.myLogs.map(log => (
        <article>
          <h3>{log.date}</h3>
          <p>Log: {log.logEntry}</p>
          <p>New Skills: {log.skills}</p>
        </article>
      ))}
    </>
  )
}

export default MyLogs