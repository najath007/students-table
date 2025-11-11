import React, { useState, useEffect } from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';

export default function Home() {
  const [Students, setStudents] = useState([])

  async function loadData() {
    try {
      const response = await fetch("http://localhost:5000/students")
      const data = await response.json()
      setStudents(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadData();
  }, [])

  async function handleDelete(id) {
    if (window.confirm("ARE YOU SURE")) {
      try {
        await fetch(`http://localhost:5000/students/${id}`, {
          method: "DELETE",
        });
        loadData()
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <div className="the-table">
      <h1>STUDENTS DETAILS</h1>
      <div className="table-container">
        <Link to="/add" className='add-btn'>Add student</Link>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.place}</td>
                <td>{stu.phone}</td>
                <td>
                  <Link to={`/view/${stu.id}`} className='btn-view'>View</Link>
                  <Link to={`/edit/${stu.id}`} className='btn-edit'>Edit</ Link>

                  <button onClick={() => handleDelete(stu.id)} className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}
