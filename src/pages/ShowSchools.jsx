import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './conponents/css/SchoolList.css';
import "../conponents/css/SchoolList.css";

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get("https://669b4df3276e45187d35146c.mockapi.io/api/new/student/newStudentData");
        setSchools(response.data);
      } catch (error) {
        console.error('Failed to fetch schools', error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className="school-list-container">
      {schools.map((school) => (
        <div key={school.id} className="school-card">
          <img src={school.image} alt={school.name} className="school-image" />
          <div className="school-info">

          <p>{school.image}</p>
            <h3>{school.name}</h3>
            <p>{school.contactNo}</p>
            <p>{school.emailId}</p>
            <p>{school.address}</p>
            <p>{school.city}</p>
            <h3>{school.state}</h3>
            
            
          </div>
        </div>
      ))}
    </div>
  );
}; 

export default ShowSchools;