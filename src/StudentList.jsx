import { students as initialStudents } from './data';
import AddStudentForm from './components/atoms/Form/AddStudentForm';
import { useState } from 'react';
import styles from './App.module.css';


function StudentList() {
  const [students, setStudents] = useState(initialStudents);
  
  const [showStudentForm, setShowStudentForm] = useState(false);
  const handleAddStudent = (newStudent) => {
    setStudents(prevStudents => [...prevStudents, newStudent]);
  };

  return (
    <div>
      <div >
        <button className={styles.btn} onClick={() => setShowStudentForm(!showStudentForm)}>
          {showStudentForm ? "Закрити форму":"Додати Студента"}
        </button>

        {showStudentForm && (
          <AddStudentForm onAddStudent={handleAddStudent} />
      )}
      </div>
      

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: '12px' }}>
            <strong>{student.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;