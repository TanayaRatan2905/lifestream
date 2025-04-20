import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addSampleBloodRequests } from '../utils/sampleRequests';
import '../App.css';

const BloodRequests = () => {
  const [bloodRequests, setBloodRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingSamples, setAddingSamples] = useState(false);

  const fetchBloodRequests = async () => {
    try {
      const response = await fetch('http://localhost:5000/blood-requests');
      if (!response.ok) {
        throw new Error('Failed to fetch blood requests');
      }
      const data = await response.json();
      setBloodRequests(data.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBloodRequests();
  }, []);

  const handleAddSamples = async () => {
    setAddingSamples(true);
    try {
      await addSampleBloodRequests();
      await fetchBloodRequests(); // Refresh the list after adding samples
    } catch (err) {
      setError(err.message);
    } finally {
      setAddingSamples(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="blood-requests-container">
      <div className="blood-requests-header">
        <h1>Blood Requests</h1>
        <div className="header-actions">
          <button
            className="secondary-button"
            onClick={handleAddSamples}
            disabled={addingSamples}
          >
            {addingSamples ? 'Adding Samples...' : 'Add Sample Requests'}
          </button>
          <Link to="/blood-requests/new" className="primary-button">
            Create New Request
          </Link>
        </div>
      </div>

      <div className="blood-requests-list">
        {bloodRequests.map((request) => (
          <div key={request.request_id} className="blood-request-card">
            <div className="blood-request-header">
              <h2>{request.patient_name}</h2>
              <span className={`urgency-badge ${request.urgency_level}`}>
                {request.urgency_level}
              </span>
            </div>
            
            <div className="blood-request-details">
              <p><strong>Blood Group:</strong> {request.blood_group}</p>
              <p><strong>Hospital:</strong> {request.hospital_name}</p>
              <p><strong>Required Units:</strong> {request.required_units}</p>
              <p><strong>Status:</strong> <span className={`status-badge ${request.status}`}>{request.status}</span></p>
            </div>

            <div className="blood-request-actions">
              <Link to={`/blood-requests/${request.request_id}`} className="secondary-button">
                View Details
              </Link>
              <Link to={`/blood-requests/${request.request_id}/donors`} className="primary-button">
                View Matching Donors
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodRequests; 