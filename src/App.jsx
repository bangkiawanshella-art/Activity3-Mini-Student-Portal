import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Students from './pages/Students'
import StudentDetail from './pages/StudentDetail'
import NotFound from './pages/NotFound'
import { initialStudents } from './data/students'

export default function App() {
  const [students, setStudents] = useState(initialStudents || [])

  const addStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent])
  }

  return (
    <div className="app-container" style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#f9f9fb' }}>
      <header style={{ padding: '1rem 2rem', backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              color: isActive ? '#635bff' : '#4b5563',
              fontWeight: isActive ? '700' : '500',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid #635bff' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/register"
            style={({ isActive }) => ({
              color: isActive ? '#635bff' : '#4b5563',
              fontWeight: isActive ? '700' : '500',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid #635bff' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            Register
          </NavLink>
          <NavLink
            to="/students"
            style={({ isActive }) => ({
              color: isActive ? '#635bff' : '#4b5563',
              fontWeight: isActive ? '700' : '500',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid #635bff' : 'none',
              paddingBottom: '0.25rem'
            })}
          >
            Students
          </NavLink>
        </nav>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '1.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register addStudent={addStudent} />} />
          <Route path="/students" element={<Students students={students} />} />
          <Route path="/students/:id" element={<StudentDetail students={students} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
