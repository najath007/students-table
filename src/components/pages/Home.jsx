import React, { useState,useEffect } from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';

export default function Home() {
    const [Students ,setStudents] = useState([])

    async function loadData() {
      try{
        const response = await fetch ("")
        const data = response.json
        setStudents(data)
      }catch(error){
        console.log(error)
      }
     }
     useEffect (()=>{
      loadData();
     },[])

  async function handleDelete (id){
    if(window.confirm("ARE YOU SURE")){
      try{
        await fetch(` ${id}`,{
          method:"DELETE",
        });
        loadData()
      }catch (error){
        console.log(error)
      }
    }
  };

  return (
    <div className="the-table">
      <h1>STUDENTS DETAILS</h1>
      <div className="table-container">
        <Link to= "/add" className='add-btn'>Add student</Link>
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
            <tr key={stu.id}>
              <td>{stu.id}</td>
              <td>{stu.name}</td>
              <td>{stu.place}</td>
              <td>{stu.phone}</td>
              <td>
                <button className="btn-view">View</button>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}
