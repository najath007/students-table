import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


export default function Edit() {

  const navigate = useNavigate
  const { id } = useParams

  const [name, setName] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/students/${id}`)
      .then((res) => {
        setName(res.data.name)
        setPhone(res.data.phone)
        setPlace(res.data.place)
  })
      
  },[id]);
  
  const handleUpdate = (e)=>{
    e.preventDefault();

    const  udatedStudent = { name,place,phone };

    axios(`http://localhost:5000/students/${id}`,{
      method: "PUT",
      headers: {"Content-Type": "applcation/json"},
      body: JSON.stringify(udatedStudent),
    }).then(()=>{
      navigate("/home");
    })
  };



  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleUpdate}>
        <label>NAme:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Place:</label>
        <input value={place} onChange={(e) => setPlace(e.target.value)} required />

        <label>Phone:</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <button type='submit'>Update</button>
      </form>
    </div>
  );
}
