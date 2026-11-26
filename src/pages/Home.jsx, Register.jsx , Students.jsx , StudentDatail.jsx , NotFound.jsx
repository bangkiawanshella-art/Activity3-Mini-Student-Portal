import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ padding: '1rem 0' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#111827' }}>Welcome to Mini Student Portal</h1>
      <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
        Manage student registrations, view enrolled students, and inspect detailed profiles.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link
          to="/register"
          style={{
            backgroundColor: '#635bff',
            color: '#fff',
            padding: '0.65rem 1.25rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          Register a Student
        </Link>
        <Link
          to="/students"
          style={{
            backgroundColor: '#e5e7eb',
            color: '#374151',
            padding: '0.65rem 1.25rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          View Students
        </Link>
      </div>
    </div>
  )
}
