import React from 'react'
import "./Sidebar.css";
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li><Link to={"/Home"}>Home</Link></li>
        <li><Link to={"/About"}>About</Link></li>
        <li><Link to={"/Contact"}>Contact</Link></li>
      </ul>
    </div>
  )
}
