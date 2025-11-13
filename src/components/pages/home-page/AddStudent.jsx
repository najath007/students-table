import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddStudent() {
  // 👇 Form input states
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  // ✅ Load existing students to find next ID
  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload

    // 1️⃣ Create new student ID
    let newId = 1;
    if (students.length > 0) {
      const allIds = students.map((s) => Number(s.id)); // get all existing IDs
      const maxId = Math.max(...allIds); // find biggest
      newId = maxId + 1; // next ID
    }

    // 2️⃣ Create new student object
    const newStudent = {
      id: newId,
      name: name,
      place: place,
      phone: phone,
    };

    try {
      // 3️⃣ Send POST request to JSON server
      await axios.post("http://localhost:5000/students", newStudent);

      alert("✅ Student added successfully!");

      // 4️⃣ Navigate back to home page
      navigate("/");
    } catch (error) {
      console.error("❌ Error adding student:", error);
    }
  };

  // ✅ UI section
  return (
    <div className="add-student">
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit} className="form-section">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />

        <label>Place:</label>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter place"
          required
        />

        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          required
        />

        <button type="submit" className="btn-add">
          Add Student
        </button>
      </form>
    </div>
  );
}
