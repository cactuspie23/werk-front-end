
const ResourceCard = ({ resource }) => {
  return (
    <>
    <h1>{resource.name}</h1>
    <p>{resource.URL}</p>
    <p>{resource.description}</p>
    <p>{resource.category}</p>
    <p>{resource.skills}</p>
    </>
  )
}

export default ResourceCard