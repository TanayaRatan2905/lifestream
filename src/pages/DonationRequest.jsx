import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const DonationRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    requester_name: '',
    hospital_name: '',
    contact_number: '',
    blood_group: '',
    units_needed: '',
    request_date: '',
  });
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

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
      const response = await fetch('http://localhost:5000/donation-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create donation request');
      }

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/donation-requests');
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="donation-request-container">
      <h1>Create Blood Donation Request</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-icon">✓</div>
            <h2>Request Submitted Successfully!</h2>
            <p>Your blood donation request has been submitted.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="donation-request-form">
        <div className="form-group">
          <label htmlFor="requester_name">Requester Name</label>
          <input
            type="text"
            id="requester_name"
            name="requester_name"
            value={formData.requester_name}
            onChange={handleChange}
            required
            placeholder="Enter requester's name"
          />
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
            placeholder="Enter hospital name"
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
            placeholder="Enter contact number"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
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
          <label htmlFor="units_needed">Units Needed</label>
          <input
            type="number"
            id="units_needed"
            name="units_needed"
            value={formData.units_needed}
            onChange={handleChange}
            required
            min="1"
            placeholder="Enter number of units needed"
          />
        </div>

        <div className="form-group">
          <label htmlFor="request_date">Request Date</label>
          <input
            type="date"
            id="request_date"
            name="request_date"
            value={formData.request_date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="primary-button">
            Submit Request
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationRequest; 