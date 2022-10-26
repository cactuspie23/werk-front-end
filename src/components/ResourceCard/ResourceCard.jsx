import { Link } from 'react-router-dom'

const ResourceCard = ({ resource }) => {
  return (
    <>
    <div>
    <Link to={`/resources/${resource._id}`}>
      <h1>{resource.name}</h1>
    </Link>
    <p>{resource.URL}</p>
    <p>{resource.description}</p>
    <p>{resource.category}</p>
    <p>{resource.skills}</p>
    </div>
    </>
  )
}

export default ResourceCard