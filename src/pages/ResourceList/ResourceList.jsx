import styles from "./ResourceList.module.css"
import { Link } from 'react-router-dom'
import ResourceCard from "../../components/ResourceCard/ResourceCard"


const ResourceList = ({resources}) => {
  
  
  return (
  <main>
    <div className={styles.resourceHeader}>
      <h1>Resources</h1>
      <div>
      <Link to='/addresource'>
        <button>Add Resource</button>
      </Link> 
      </div>
    </div>  
    <div className={styles.container} >
      {resources.map(resource => (
        <ResourceCard resource={resource} key={resource._id} />
      ))}
    </div>
  </main>
  )
}


export default ResourceList