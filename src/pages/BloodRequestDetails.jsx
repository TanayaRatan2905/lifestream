import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const BloodRequestDetails = () => {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [matchingDonors, setMatchingDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequestDetails = async () => {
      try {
        // Fetch request details
        const requestResponse = await fetch(`http://localhost:5000/blood-requests/${requestId}`);
        if (!requestResponse.ok) {
          throw new Error('Failed to fetch request details');
        }
        const requestData = await requestResponse.json();
        setRequest(requestData.data);

        // Fetch matching donors
        const donorsResponse = await fetch(`http://localhost:5000/blood-requests/${requestId}/matching-donors`);
        if (!donorsResponse.ok) {
          throw new Error('Failed to fetch matching donors');
        }
        const donorsData = await donorsResponse.json();
        setMatchingDonors(donorsData.data);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRequestDetails();
  }, [requestId]);

  const handleStatusUpdate = async (newStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/blood-requests/${requestId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      const updatedRequest = await response.json();
      setRequest(updatedRequest.data);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!request) return <div className="error">Request not found</div>;

  return (
    <div className="request-details-container">
      <div className="request-details-header">
        <h1>Blood Request Details</h1>
        <button
          className="secondary-button"
          onClick={() => navigate('/blood-requests')}
        >
          Back to Requests
        </button>
      </div>

      <div className="request-details-card">
        <div className="request-details-section">
          <h2>Patient Information</h2>
          <p><strong>Name:</strong> {request.patient_name}</p>
          <p><strong>Blood Group:</strong> {request.blood_group}</p>
          <p><strong>Required Units:</strong> {request.required_units}</p>
          <p><strong>Urgency Level:</strong> <span className={`urgency-badge ${request.urgency_level}`}>{request.urgency_level}</span></p>
        </div>

        <div className="request-details-section">
          <h2>Hospital Information</h2>
          <p><strong>Hospital Name:</strong> {request.hospital_name}</p>
          <p><strong>Address:</strong> {request.hospital_address}</p>
          <p><strong>Contact Number:</strong> {request.contact_number}</p>
        </div>

        <div className="request-details-section">
          <h2>Request Status</h2>
          <p>
            <strong>Current Status:</strong>{' '}
            <span className={`status-badge ${request.status}`}>{request.status}</span>
          </p>
          <div className="status-actions">
            <button
              className={`status-button ${request.status === 'pending' ? 'active' : ''}`}
              onClick={() => handleStatusUpdate('pending')}
            >
              Pending
            </button>
            <button
              className={`status-button ${request.status === 'fulfilled' ? 'active' : ''}`}
              onClick={() => handleStatusUpdate('fulfilled')}
            >
              Fulfilled
            </button>
            <button
              className={`status-button ${request.status === 'cancelled' ? 'active' : ''}`}
              onClick={() => handleStatusUpdate('cancelled')}
            >
              Cancelled
            </button>
          </div>
        </div>
      </div>

      <div className="matching-donors-section">
        <h2>Matching Donors</h2>
        {matchingDonors.length > 0 ? (
          <div className="donors-list">
            {matchingDonors.map((donor) => (
              <div key={donor.donor_id} className="donor-card">
                <h3>{donor.name}</h3>
                <p><strong>Contact:</strong> {donor.contact_number}</p>
                <p><strong>Email:</strong> {donor.email}</p>
                <p><strong>Last Donation:</strong> {new Date(donor.last_donation_date).toLocaleDateString()}</p>
                <button
                  className="contact-button"
                  onClick={() => window.location.href = `tel:${donor.contact_number}`}
                >
                  Contact Donor
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-donors">No matching donors found at this time.</p>
        )}
      </div>
    </div>
  );
};

export default BloodRequestDetails; 