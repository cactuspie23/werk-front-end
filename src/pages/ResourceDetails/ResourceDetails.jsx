import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import * as resourceService from '../../services/resourceService'


const ResourceDetails = (props) => {
  const { id } = useParams()
  const [resource, setResource] = useState(null)

  useEffect(() => {
    const fetchResource = async () => {
      const data = await resourceService.show(id)
      setResource(data)
    }
    fetchResource()
  }, [id])

  if (!resource) return <main> Loading...</main>

  return (
    <main>
      <article>
          <h1>{resource.name}</h1>
          <h3><Link>{resource.URL}</Link></h3>
          <h3>{resource.description}</h3>
          <h3>{resource.category}</h3>
          <h3>{resource.skills}</h3>
          </article>
        <span>
            {resource.owner._id === props.user.profile &&
              <>
                <Link to={`/resources/${id}/edit`} state={resource}><button>Edit</button></Link>
                <button onClick={() => props.handleDeleteResource(id)}
                >
                  Delete
                </button>
              </>
            }
        </span>
    </main>
  )
}

export default ResourceDetails