import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/students/${id}`, {
      method: "DELETE",
    })
      .then(() => setStudents(students.filter(s => s.id !== id)));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Students List</h2>
        <Link to="/add" className="btn btn-primary">Add Student</Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.place}</td>
                <td>{s.phone}</td>
                <td>
                  <Link to={`/edit/${s.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                  <Link to={`/view/${s.id}`} className="btn btn-info btn-sm me-2">View</Link>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
