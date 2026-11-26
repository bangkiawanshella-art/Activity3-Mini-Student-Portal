import { Link } from 'react-router-dom'
import { yearLabel } from '../data/students'

export default function Students({ students = [] }) {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#111827' }}>Enrolled Students</h1>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Total registered: {students.length}</p>

      {students.length === 0 ? (
        <p>No students enrolled yet. <Link to="/register">Register one now.</Link></p>
      ) : (
        <div style={{ overflowX: 'auto', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#f3f4f6', borderBottom: '1px solid #e5e7eb' }}>
                <th style={{ padding: '0.75rem 1rem' }}>Student ID</th>
                <th style={{ padding: '0.75rem 1rem' }}>Full Name</th>
                <th style={{ padding: '0.75rem 1rem' }}>Course</th>
                <th style={{ padding: '0.75rem 1rem' }}>Year Level</th>
              </tr>
            </thead>
            <tbody>
              {students.map((st) => {
                const sid = st.studentId || st.id
                return (
                  <tr key={sid} style={{ borderBottom: '1px solid #f3f4f6' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>{sid}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <Link to={`/students/${sid}`} style={{ color: '#635bff', textDecoration: 'none', fontWeight: '600' }}>
                        {st.fullName}
                      </Link>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>{st.course}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      {typeof yearLabel === 'function' ? yearLabel(st.yearLevel) : `${st.yearLevel} Year`}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}