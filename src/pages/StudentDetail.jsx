import { useParams, Link } from 'react-router-dom'
import { yearLabel } from '../data/students'

export default function StudentDetail({ students = [] }) {
  const { id } = useParams()

  const student = students.find(
    (s) => String(s.id) === String(id) || String(s.studentId) === String(id)
  )

  if (!student) {
    return (
      <div style={{ padding: '1rem 0' }}>
        <h2 style={{ color: '#111827' }}>Student Details</h2>
        <p style={{ color: '#dc2626', margin: '1rem 0' }}>
          No student record found for ID: <strong>{id}</strong>
        </p>
        <Link to="/students" style={{ color: '#635bff', textDecoration: 'none' }}>← Back to students list</Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '1rem 0' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#111827' }}>Student details</h1>

      <div
        style={{
          maxWidth: '480px',
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #eaeaea',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ margin: '0.5rem 0', color: '#374151' }}>
          <strong>Full Name:</strong> {student.fullName}
        </p>
        <p style={{ margin: '0.5rem 0', color: '#374151' }}>
          <strong>Student ID:</strong> {student.studentId || student.id}
        </p>
        <p style={{ margin: '0.5rem 0', color: '#374151' }}>
          <strong>Email:</strong> {student.email}
        </p>
        <p style={{ margin: '0.5rem 0', color: '#374151' }}>
          <strong>Course:</strong> {student.course}
        </p>
        <p style={{ margin: '0.5rem 0', color: '#374151' }}>
          <strong>Year Level:</strong>{' '}
          {typeof yearLabel === 'function' ? yearLabel(student.yearLevel) : `${student.yearLevel} Year`}
        </p>
      </div>

      <Link to="/students" style={{ color: '#635bff', textDecoration: 'none', fontWeight: '600' }}>
        ← Back to students
      </Link>
    </div>
  )
}
