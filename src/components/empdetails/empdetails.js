import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import Employee from '../employee/employee';
import LeaveForm from '../leaveform/leaveform';
import './empdetails.css'

export default function EmpDetails() {
  const navigate = useNavigate(); // Get the history object from react-router-dom
  const { id } = useParams();
  const [empdetails, setEmpDetails] = useState([]);
  const [updateEmpDetails, setUpdateEmpDetails] = useState(false);

  useEffect(() => {
      // Validate if id is greater than 100
      if (parseInt(id, 10) > 100) {
        // Redirect to an error page or display an error message
        navigate('/error'); // Update the path to your error page
        return;
      }
    fetch(`http://localhost:5000/employees/${id}`)
      .then(response => response.json())
      .then(dataemp => {
        setEmpDetails(dataemp);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id,updateEmpDetails,navigate]);

  const handleUpdateEmpDetails = () => {
    setUpdateEmpDetails(prevState => !prevState);
  };

  return (
    <div className='empdetails'>
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <div>
            <Employee />
          </div>
        </div>
        <div className="col-9">
          {empdetails.map(dataemp => (
            <div className='details'>
              <h1 style={{ color: 'white' }}>{dataemp.firstname} {dataemp.lastname}</h1>
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Firstname:</strong></td>
                    <td>{dataemp.firstname}</td>
                  </tr>
                  <tr>
                    <td><strong>Lastname:</strong></td>
                    <td>{dataemp.lastname}</td>
                  </tr>
                  <tr>
                    <td><strong>Email:</strong></td>
                    <td>{dataemp.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Phone number:</strong></td>
                    <td>{dataemp.phone}</td>
                  </tr>
                  <tr>
                    <td><strong>Title:</strong></td>
                    <td>{dataemp.title}</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h1 id='h1leave'>Leave details</h1>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Leaves taken:</strong></td>
                    <td>{dataemp.leaves}</td>
                  </tr>
                  <tr>
                    <td><strong>Maximum leaves:</strong></td>
                    <td>{dataemp.max_leaves}</td>
                  </tr>
                  <tr>
                    <td><strong>Leaves left:</strong></td>
                    <td>{dataemp.leaves_left}</td>
                  </tr>
                </tbody>
              </table>
              <LeaveForm onLeaveSubmit={handleUpdateEmpDetails} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
  
}
