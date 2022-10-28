import styles from './EventCard.module.css'
import { Link } from 'react-router-dom'

const EventCard = (props) => {

  const date = new Date(props.event.date).toLocaleDateString()
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardContentHeading}>
          <h1 >{props.event.name}</h1>
        </div>
        <div className={styles.dateTime}>
          <h4>{date}</h4>
          <h4>{props.event.time}</h4>
        </div>
        <h4>{props.event.location}</h4>
        <p>{props.event.description}</p>
        <div class='buttons'>
          {props.event.owner === props.user.profile &&
            <>
              <Link to={`/events/${props.event._id}/edit`} state={{event: props.event}}>
                <button className={styles.button}>Edit</button>
              </Link>
              <button className={styles.button} onClick={() => props.handleDeleteEvent(props.event._id)}>Delete</button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default EventCard