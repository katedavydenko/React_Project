import { students } from './data';
import styles from './App.module.css'; // Припустимо, що ви створили контейнер для стрічки

function App() {
  const getAverage = (grades) => grades.reduce((a, b) => a + b, 0) / grades.length;
  const totalAverage = students.reduce((acc, student) => {
    return acc + getAverage(student.grades);
  }, 0) / students.length;
  const sortedStudents = [...students].sort((a, b) => {
  const avgA = a.grades.reduce((sum, g) => sum + g, 0) / a.grades.length;
  const avgB = b.grades.reduce((sum, g) => sum + g, 0) / b.grades.length;
  return avgB - avgA; 
});
  return (
    <div className={styles.appContainer}>
      
      <div className={styles.feed}>
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: '10px' }}>
            <strong>{student.name}</strong> — {student.faculty} 
          
          </li>
        ))}
        
      </div>
      <div>
          {students
            .filter((student) => getAverage(student.grades) > 60)
            .map((student) => (
              <li key={student.id} style={{ color: 'green' }}>
                <strong>{student.name}</strong> — Бал: {getAverage(student.grades).toFixed(1)}
              </li>
            ))}
      </div>
      <p >Середній бал усіх студентів: {totalAverage.toFixed(2)} </p>
        <div>
        {sortedStudents.map((student) => (
          <li key={student.id} style={{ marginBottom: '8px' }}>
            {/* Використовуємо тернарний оператор для стилів */}
            <span style={{
              color: student.scholarship ? 'black' : 'gray',
              textDecoration: student.scholarship ? 'none' : 'line-through',
              fontWeight: student.scholarship ? 'bold' : 'normal'
            }}>
              {student.name}
            </span> 
            {' — '} 
            <span>
              Середній бал: {(student.grades.reduce((a, b) => a + b, 0) / student.grades.length).toFixed(1)}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
