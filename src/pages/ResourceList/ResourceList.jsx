import styles from "./ResourceList.module.css"
import { Link } from 'react-router-dom'
import ResourceCard from "../../components/ResourceCard/ResourceCard"


const ResourceList = ({resources}) => {
  
  
  return (
    <main>
      {resources.map(resource => (
        <ResourceCard resource={resource} key={resource._id} />
      ))}
      <Link to='/addresource'>
        <button>Add Resource</button>
      </Link>
    </main>
  )
}


export default ResourceList