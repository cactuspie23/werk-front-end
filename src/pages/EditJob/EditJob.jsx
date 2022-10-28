import { useState, useRef, useEffect } from "react"
import { useLocation } from "react-router-dom"

const EditJob = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)
  const [validForm, setValidForm] = useState(false)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateJob(form)
  }

  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [form])

  return (
    <main>
      <div class='form-title'>
        <h1>Edit Job</h1>
      </div>
      <div class='input-form'>
        <form onSubmit={handleSubmit} ref={formElement}>
          <label htmlFor="title-input">Job Title</label>
          <input
            required
            type="text"
            name="jobTitle"
            id="title-input"
            value={form.jobTitle}
            placeholder="Job Title"
            onChange={handleChange}
          />
          <label htmlFor="company-input">Company</label>
          <input
            required
            type="text"
            name="companyName"
            id="company-input"
            value={form.companyName}
            placeholder="Company"
            onChange={handleChange}
          />
          <label htmlFor="url-input">Website URL</label>
          <input
            required
            type="text"
            name="url"
            id="url-input"
            value={form.url}
            placeholder="URL"
            onChange={handleChange}
          />
          <label htmlFor="jobDetails-input">Job Details</label>
          <textarea
            required
            type="text"
            name="jobDetails"
            id="jobDetails-input"
            value={form.jobDetails}
            placeholder="Job Details"
            onChange={handleChange}
          />
          <label htmlFor="skills-input">Skills</label>
          <textarea
            type="text"
            name="skills"
            id="skills-input"
            value={form.skills}
            placeholder="Skills"
            onChange={handleChange}
          />
          <div class='submit-button'>
            <button 
              type="submit"
              disabled={!validForm}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default EditJob