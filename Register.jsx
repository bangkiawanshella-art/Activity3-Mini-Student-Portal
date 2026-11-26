import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register({ addStudent }) {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    course: '',
    yearLevel: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.'
    }

    const idRegex = /^\d{4}-\d{4}$/
    if (!idRegex.test(formData.studentId.trim())) {
      newErrors.studentId = 'Student ID must match format ####-#### (e.g. 2024-0123).'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course.'
    }

    if (!formData.yearLevel) {
      newErrors.yearLevel = 'Please select a year level.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      if (typeof addStudent === 'function') {
        addStudent({
          id: formData.studentId,
          fullName: formData.fullName,
          studentId: formData.studentId,
          email: formData.email,
          course: formData.course,
          yearLevel: formData.yearLevel,
        })
      }
      navigate('/students')
    }
  }

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem', color: '#111827' }}>Register a student</h1>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>All fields are required.</p>

      <div
        style={{
          maxWidth: '480px',
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          border: '1px solid #eaeaea',
        }}
      >
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="fullName" style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem', color: '#374151' }}>
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                boxSizing: 'border-box',
              }}
            />
            {errors.fullName && <p style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '0.3rem' }}>{errors.fullName}</p>}
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="studentId" style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem', color: '#374151' }}>
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              placeholder="2024-0123"
              value={formData.studentId}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                boxSizing: 'border-box',
              }}
            />
            <small style={{ display: 'block', color: '#6b7280', marginTop: '0.3rem' }}>
              Format: four digits, a dash, four digits.
            </small>
            {errors.studentId && <p style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '0.3rem' }}>{errors.studentId}</p>}
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="email" style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem', color: '#374151' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                boxSizing: 'border-box',
              }}
            />
            {errors.email && <p style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '0.3rem' }}>{errors.email}</p>}
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="course" style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem', color: '#374151' }}>
              Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                boxSizing: 'border-box',
                backgroundColor: '#fff',
              }}
            >
              <option value="">Choose a course</option>
              <option value="BSIT">BSIT</option>
              <option value="BSCS">BSCS</option>
              <option value="BSIS">BSIS</option>
            </select>
            {errors.course && <p style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '0.3rem' }}>{errors.course}</p>}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem', color: '#374151' }}>
              Year level
            </label>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {[
                { val: '1', label: '1st Year' },
                { val: '2', label: '2nd Year' },
                { val: '3', label: '3rd Year' },
                { val: '4', label: '4th Year' },
              ].map((item) => (
                <label key={item.val} style={{ cursor: 'pointer', fontWeight: 'normal', color: '#374151' }}>
                  <input
                    type="radio"
                    name="yearLevel"
                    value={item.val}
                    checked={String(formData.yearLevel) === String(item.val)}
                    onChange={handleChange}
                    style={{ marginRight: '0.35rem' }}
                  />
                  {item.label}
                </label>
              ))}
            </div>
            {errors.yearLevel && <p style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '0.3rem' }}>{errors.yearLevel}</p>}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#635bff',
              color: '#fff',
              border: 'none',
              padding: '0.65rem 1.25rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Register student
          </button>
        </form>
      </div>
    </div>
  )
}