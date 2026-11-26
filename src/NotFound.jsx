import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#dc2626', marginBottom: '0.5rem' }}>404</h1>
      <h2 style={{ marginBottom: '1rem', color: '#111827' }}>Page Not Found</h2>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: '#635bff',
          color: '#fff',
          padding: '0.65rem 1.25rem',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: '600'
        }}
      >
        Return to Home
      </Link>
    </div>
  )
}