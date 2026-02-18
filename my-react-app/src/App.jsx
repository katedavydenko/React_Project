import { students } from './data';
import styles from './App.module.css'; // Припустимо, що ви створили контейнер для стрічки

function App() {
  const getAverage = (grades) => grades.reduce((a, b) => a + b, 0) / grades.length;
  const totalAverage = students.reduce((acc, student) => {
    return acc + getAverage(student.grades);
  }, 0) / students.length;
  return (
    <div className={styles.appContainer}>
      
      <div className={styles.feed}>
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: '10px' }}>
            <strong>{student.name}</strong> — {student.faculty} 
          
          </li>
        ))}
        
      </div>
      <ul>
          {students
            // 1. Спочатку фільтруємо масив
            .filter((student) => getAverage(student.grades) > 60)
            // 2. Потім перетворюємо відфільтровані дані на JSX
            .map((student) => (
              <li key={student.id} style={{ color: 'green' }}>
                <strong>{student.name}</strong> — Бал: {getAverage(student.grades).toFixed(1)}
              </li>
            ))}
      </ul>
        <p>
        <strong>Середній бал усіх студентів:</strong> {totalAverage.toFixed(2)}
        </p>
    </div>
  );
}

export default App;
