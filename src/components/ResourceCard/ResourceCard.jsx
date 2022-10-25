import { Link } from 'react-router-dom'

const ResourceCard = ({ resource }) => {
  return (
    <Link to={`/resources/${resource._id}`}>
      <article>
        <header>
          <span>
            <h1>{resource.name}</h1>
          </span>
        </header>
        <p>{resource.description}</p>
      </article>
    </Link>
  )
}

export default ResourceCard