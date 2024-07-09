import React, { useRef, useState } from "react";
import { deleteStudent } from "../services/api";

export default function StudentList({
  students,
  setCurrentStudent,
  fetchStudents,
}) {

  const selectedId = useRef();

  const handleDelete= async (id)=>{
      await deleteStudent(id);
      fetchStudents();
  }

  const handleClick = (student)=>
  {
    selectedId.current = student.id;
    setCurrentStudent(student);
  }

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id} style={{color: selectedId.current == student.id ? "blue" : "black",display:"flex",justifyContent:"center",marginTop:"30px"}}>
          <h1>{student.name} {student.surname}  (Age:{student.age},Score:{student.score})</h1>
          <button style={{borderRadius:"10px",padding:"10px",fontSize:"1em",backgroundColor:"green",color:"white",width:"8%",marginLeft:"30px"}} onClick={() => handleClick(student)}>Edit</button>
          <button style={{borderRadius:"10px",padding:"10px",fontSize:"1em",backgroundColor:"red",color:"white",width:"8%",marginLeft:"30px"}} onClick={() => handleDelete(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
