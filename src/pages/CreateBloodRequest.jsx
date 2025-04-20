import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const CreateBloodRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patient_name: '',
    blood_group: '',
    hospital_name: '',
    hospital_address: '',
    contact_number: '',
    required_units: '',
    urgency_level: 'medium',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/blood-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create blood request');
      }

      const data = await response.json();
      navigate(`/blood-requests/${data.data.bloodRequest.request_id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="create-request-container">
      <h1>Create New Blood Request</h1>
      
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="blood-request-form">
        <div className="form-group">
          <label htmlFor="patient_name">Patient Name</label>
          <input
            type="text"
            id="patient_name"
            name="patient_name"
            value={formData.patient_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="blood_group">Blood Group</label>
          <select
            id="blood_group"
            name="blood_group"
            value={formData.blood_group}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="hospital_name">Hospital Name</label>
          <input
            type="text"
            id="hospital_name"
            name="hospital_name"
            value={formData.hospital_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hospital_address">Hospital Address</label>
          <textarea
            id="hospital_address"
            name="hospital_address"
            value={formData.hospital_address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact_number">Contact Number</label>
          <input
            type="tel"
            id="contact_number"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="required_units">Required Units</label>
          <input
            type="number"
            id="required_units"
            name="required_units"
            value={formData.required_units}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="urgency_level">Urgency Level</label>
          <select
            id="urgency_level"
            name="urgency_level"
            value={formData.urgency_level}
            onChange={handleChange}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="primary-button">
            Create Request
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => navigate('/blood-requests')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBloodRequest; 