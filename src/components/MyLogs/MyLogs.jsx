
const MyLogs = (props) => {
  if (!props.myLogs) return <h4>No Logs</h4>

  return (
    <article>
      {props.myLogs.map(log => (
        <p>{log.date}</p>
      ))}
    </article>
  )
}

export default MyLogs