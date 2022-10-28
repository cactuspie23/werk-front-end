import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './ResourceDetails.module.css'

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
      <div className={styles.details}>
      <h1>Resource Detail</h1>
      <section className={styles.container}>
        <article>
        <h1>{resource.name}</h1>
        <h3><Link>{resource.URL}</Link></h3>
        <h3>{resource.description}</h3>
        <h3>{resource.category}</h3>
        <h3>{resource.skills}</h3>
        </article>
      </section>
      <span>
        {resource.owner._id === props.user.profile &&
          <div class='buttons'>
            <Link to={`/resources/${id}/edit`}      state={resource}>
              <div class="btn">
                <button className={styles.resourceBtn}>Edit</button>
              </div>
            </Link>
            <div class="btn">
              <button className={styles.resourceBtn} onClick={() => props.handleDeleteResource(id)}
              >
                Delete
              </button>
            </div>
          </div>
        }
      </span>
      </div>
    </main>
  )
}

export default ResourceDetails