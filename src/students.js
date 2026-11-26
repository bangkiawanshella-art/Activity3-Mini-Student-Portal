export const initialStudents = [
  {
    id: '2024-0123',
    studentId: '2024-0123',
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    course: 'BSIT',
    yearLevel: '3',
  },
  {
    id: '2024-0456',
    studentId: '2024-0456',
    fullName: 'John Smith',
    email: 'john.smith@example.com',
    course: 'BSCS',
    yearLevel: '2',
  },
]

export function yearLabel(level) {
  const map = {
    1: '1st Year',
    2: '2nd Year',
    3: '3rd Year',
    4: '4th Year',
    '1': '1st Year',
    '2': '2nd Year',
    '3': '3rd Year',
    '4': '4th Year',
  }
  return map[level] || `${level} Year`
}