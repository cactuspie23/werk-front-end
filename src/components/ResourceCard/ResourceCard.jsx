import { Link } from 'react-router-dom'
import styles from './ResourceCard.module.css'

const ResourceCard = ({ resource }) => {
  return (
    <div>
      <article className={styles.container}>
    <Link to={`/resources/${resource._id}`}>
        <h2>{resource.name}</h2>
    </Link>
        <p>URL: <Link>{resource.URL}</Link></p>
        <p>Description: {resource.description}</p>
        <p>Category: {resource.category}</p>
        <p>Skills: {resource.skills}</p>
    </article>
    </div>
    
    
  )
}

export default ResourceCard