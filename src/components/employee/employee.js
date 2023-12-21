import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './employee.css';

export default function Employee() {
  const [employee, setEmployee] = useState([]);
  const emplistStyle = {
    height: '850px', 
    overflow: 'scroll', 
  };

  useEffect(() => {
    fetch('http://localhost:5000/employees')
      .then(response => response.json())
      .then(data => setEmployee(data));
  }, []);

  return (
    <div id='mainemp'>
      <br />
      <h2>EMPLOYEES LIST</h2>
      
      <div style={emplistStyle}>
        {employee.map(data => (
          <ul>
            
              <Link id='link' to={`/employees/${data.id}`} className="navbar-brand">
                {` ${data.id} ${data.firstname} ${data.lastname}`}
              </Link>
            
          </ul>
        ))}
      </div>
    </div>
  );
}