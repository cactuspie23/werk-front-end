import { useState, useRef, useEffect } from "react"

const AddJob = (props) => {
  const [form, setForm] = useState({
    jobTitle: '',
    companyName: '',
    url: '',
    resume: '',
    coverLetter: '',
    jobDetails: '',
    skills: '',
    private: false,
  })

  const [validForm, setValidForm] = useState(false)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		props.handleAddJob(form)
  }

  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [form])

  return (
    <main>
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
        <label htmlFor="resume-input">Resume</label>
				<textarea
          type="text"
          name="resume"
          id="resume-input"
          value={form.resume}
          placeholder="Resume"
          onChange={handleChange}
        />
        <label htmlFor="coverLetter-input">Cover Letter</label>
				<textarea
          type="text"
          name="coverLetter"
          id="coverLetter-input"
          value={form.coverLetter}
          placeholder="Cover Letter"
          onChange={handleChange}
        />
        <label htmlFor="jobDetails-input">Job Details</label>
				<textarea
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
        <label htmlFor="private-input">Private</label>
        <input 
          type="checkbox"
          name="private"
          id="private-input"
          value={form.private}
          onChange={handleChange}
        />
        <button 
          type="submit"
          disabled={!validForm}
        >
          SUBMIT
        </button>
      </form>
    </main>
  )
}

export default AddJob