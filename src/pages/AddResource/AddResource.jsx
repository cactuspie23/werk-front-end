import { useState, useRef, useEffect } from "react"
import styles from './AddResource.module.css'

const AddResource = (props) => {
  const [form, setForm] = useState({
    name: '',
    URL: '',
    description: '',
    category: 'book',
    skills: '',
  })

  const [validForm, setValidForm] = useState(false)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddResource(form)
  }

  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [form])

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Resource Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="URL-input">URL</label>
        <input
          required
          type="text"
          name="URL"
          id="URL-input"
          placeholder="URL"
          onChange={handleChange}
        />
        <label htmlFor="description-input">Description</label>
        <textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={form.text}
          placeholder="Description"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={form.category}
          onChange={handleChange}
        >
          <option value="Book">Book</option>
          <option value="Video">Video</option>
          <option value="Interview Tip">Interview Tip</option>
          <option value="Blog">Blog</option>
          <option value="Article">Article</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="skills-input">Skills</label>
        <input
          required
          type="text"
          name="skills"
          id="skills-input"
          placeholder="Skills"
          onChange={handleChange}
        />
        <button 
        type="submit"
        disabled={!validForm}
        >
          Add Resource
          </button>
      </form>
    </main>

  )
}

export default AddResource