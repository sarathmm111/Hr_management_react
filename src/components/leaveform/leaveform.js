import React,{useState} from "react";
import { useParams } from 'react-router-dom';
import './leaveform.css'

const LeaveForm = ({ onLeaveSubmit }) => {
    const { id } = useParams();
    const [leaveData, setLeaveData] = useState({date: '', reason: '',});
    console.log(id)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLeaveData({...leaveData, [name]: value });
      };

      const handleSubmit = async (e) => {e.preventDefault();      
          const response = await fetch(`http://localhost:5000/leave/${id}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(leaveData),
          });

          if (response.ok) {
            console.log("Leave submitted successfully");
            onLeaveSubmit();
            setLeaveData({ date: '', reason: '' });
            window.alert('Leave Submitted Successfully');
          } else {
            console.error("Leave submitted failed");
            window.alert('Leave already submitted on this date');
            setLeaveData({ date: '', reason: '' });
        }
  };

  return (
    <div className="form-div"> 
    <form onSubmit={handleSubmit}>
        <h3>LEAVE FORM</h3>
      <label>
      Leave date:
      <input type="date" name="date" required value={leaveData.date} onChange={handleInputChange}
      />
      </label>

      <label>
        Reason:
        <textarea name="reason" value={leaveData.reason} required onChange={handleInputChange}
        />
      </label>
      
      <button type="submit">Submit Leave</button>
    </form>
    </div>
  );
};

export default LeaveForm;

