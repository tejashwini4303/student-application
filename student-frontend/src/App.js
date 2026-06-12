import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA:", data);
        setStudents(data);
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  }, []);

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <p key={student.id}>
          {student.id} - {student.name}
        </p>
      ))}
    </div>
  );
}

export default App;