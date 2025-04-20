import React, { useState } from 'react';
import '../App.css';

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '', // Changed from fullName to match backend
    age: '',
    gender: '',
    blood_group: '', // Changed from bloodType to match backend
    weight: '', // Backend doesn't have weight currently
    last_donation_date: '', // Changed from lastDonation to match backend
    hasMedicalConditions: false, // Backend doesn't have this
    medicalConditionsDetails: '', // Backend doesn't have this
    isTakingMedications: false, // Backend doesn't have this
    medicationsDetails: '', // Backend doesn't have this
    hasRecentSurgery: false, // Backend doesn't have this
    recentSurgeryDetails: '', // Backend doesn't have this
    hasTattoo: false, // Backend doesn't have this
    contact_number: '', // Changed from contact to match backend
    email: '',
    address: '',
    haemoglobin_level: '', // Added to match backend
    smoking_history: false, // Added to match backend
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/donors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Redirect to eligibility result page with the eligibility status
        window.location.href = `/eligibility-result?eligible=${data.is_eligible}`;
      } else {
        const errorData = await response.json();
        alert('Form submission failed: ' + (errorData.error || 'An error occurred.'));
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('There was a network error. Please try again later.');
    }
  };

  return (
    <div className="donate-container">
      <div className="donate-content">
        <h1>Blood Donation Form</h1>
        <p className="form-intro">
          Please fill out the following form accurately. This information helps us
          determine your eligibility to donate blood and ensure the safety of both
          donors and recipients.
        </p>

        <form onSubmit={handleSubmit} className="donation-form">
          <div className="form-section">
            <h2>Personal Information</h2>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Age (18-65)</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="18"
                  max="65"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="blood_group">Blood Type</label>
                <select
                  id="blood_group"
                  name="blood_group"
                  value={formData.blood_group}
                  onChange={handleChange}
                >
                  <option value="">Select if known</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="haemoglobin_level">Haemoglobin Level (g/dL)</label>
                <input
                  type="number"
                  id="haemoglobin_level"
                  name="haemoglobin_level"
                  step="0.1"
                  value={formData.haemoglobin_level}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="last_donation_date">Date of Last Donation (if applicable)</label>
              <input
                type="date"
                id="last_donation_date"
                name="last_donation_date"
                value={formData.last_donation_date}
                onChange={handleChange}
              />
              <small>Must be at least 56 days since your last donation</small>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="smoking_history"
                name="smoking_history"
                checked={formData.smoking_history}
                onChange={handleChange}
              />
              <label htmlFor="smoking_history">Do you have a history of smoking?</label>
            </div>
          </div>

          <div className="form-section">
            <h2>Contact Information</h2>

            <div className="form-group">
              <label htmlFor="contact_number">Phone Number</label>
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
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          <div className="consent-section">
            <p>
              By submitting this form, I confirm that all information provided is accurate to the best of my knowledge.
              I understand that this information will be used to determine my eligibility to donate blood.
            </p>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Donate;