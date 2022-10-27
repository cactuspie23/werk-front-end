import styles from "./ResourceList.module.css"
import { Link } from 'react-router-dom'
import ResourceCard from "../../components/ResourceCard/ResourceCard"


const ResourceList = ({resources}) => {
  
  
  return (
    <main className={styles.container} >
      <h1>Resources</h1>
      <Link to='/addresource'>
        <button>Add Resource</button>
      </Link>
      {resources.map(resource => (
        <ResourceCard resource={resource} key={resource._id} />
      ))}
    </main>
  )
}


export default ResourceList