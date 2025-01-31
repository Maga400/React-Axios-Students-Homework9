import React, { useEffect, useState } from "react";
import { addStudent, updateStudent } from "../services/api";

export default function StudentForm({
  currentStudent,
  setCurrentStudent,
  fetchStudents,
}) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: 0,
    score: 0,
  });

  useEffect(() => {
    if (currentStudent) {
      setFormData(currentStudent);
    }
  }, [currentStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await updateStudent(formData.id, formData);
    } else {
      await addStudent(formData);
    }

    setFormData({
      name: "",
      surname: "",
      age: 0,
      score: 0,
    });

    fetchStudents();
    setCurrentStudent(null);
  };
  return (
    <section style={{marginTop:"30px"}}>
      <form onSubmit={handleSubmit}>
        <input style={{width:"10%",borderRadius:"10px",border:"2px solid black",padding:"10px",fontSize:"1.2em",marginRight:"30px"}}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input style={{width:"10%",borderRadius:"10px",border:"2px solid black",padding:"10px",fontSize:"1.2em",marginRight:"30px"}}
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Surname"
          required
        />
        <input style={{width:"10%",borderRadius:"10px",border:"2px solid black",padding:"10px",fontSize:"1.2em",marginRight:"30px"}}
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          type="number"
          required
        />
        <input style={{width:"10%",borderRadius:"10px",border:"2px solid black",padding:"10px",fontSize:"1.2em",marginRight:"30px"}}
          name="score"
          value={formData.score}
          onChange={handleChange}
          placeholder="Score"
          type="number"
          required
        />
        <button style={{borderRadius:"10px",padding:"10px",fontSize:"1.2em",backgroundColor:"blue",color:"white",width:"10%",marginLeft:"30px"}} type="submit">{formData.id ? "Update" : "Add"} Student</button>
      </form>
    </section>
  );
}
