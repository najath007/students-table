import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function View() {

  const [name,setName] = useState("")
  const [place,setPlace] = useState("")
  const [phone,setPhone] = useState("")

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:5000/students/${id}`)
      .then((res) => {
        setName(res.data.name)
        setPhone(res.data.phone)
        setPlace(res.data.place)
      })
  },[id])

  return (
  <div>
    <h1 className="mt-5">Students Details</h1>
    Name : {name}<br/>
    place : {place}<br/>
    phone : {phone}<br/>
    <button className="btn-lg"
     onClick={()=> navigate("/home")}>BACK</button>
  </div>
)

}
