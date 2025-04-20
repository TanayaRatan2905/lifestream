import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../App.css';

const EligibilityResult = () => {
  const [searchParams] = useSearchParams();
  const isEligible = searchParams.get('eligible') === 'true';

  return (
    <div className="eligibility-container">
      <div className="eligibility-content">
        {isEligible ? (
          <div className="eligible-message">
            <h1>Congratulations! 🎉</h1>
            <div className="success-icon">✓</div>
            <h2>You are eligible to donate blood!</h2>
            <p>
              Thank you for your willingness to save lives. Your eligibility has been confirmed,
              and you can proceed with the donation process.
            </p>
            <div className="next-steps">
              <h3>Next Steps:</h3>
              <ul>
                <li>Schedule your donation appointment</li>
                <li>Get a good night's sleep before donation</li>
                <li>Eat a healthy meal before coming</li>
                <li>Drink plenty of water</li>
                <li>Bring a valid ID</li>
              </ul>
            </div>
            <div className="action-buttons">
              <Link to="/drives" className="primary-button">
                Find Donation Drives
              </Link>
              <Link to="/" className="secondary-button">
                Return Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="not-eligible-message">
            <h1>Thank you for your interest! ❤️</h1>
            <div className="info-icon">ℹ️</div>
            <h2>Currently Not Eligible</h2>
            <p>
              Based on the information provided, you are not currently eligible to donate blood.
              This is to ensure your safety and the safety of the recipients.
            </p>
            <div className="improvement-tips">
              <h3>Tips to Improve Eligibility:</h3>
              <ul>
                <li>Maintain a healthy diet rich in iron</li>
                <li>Stay hydrated by drinking plenty of water</li>
                <li>Get adequate sleep and rest</li>
                <li>Exercise regularly</li>
                <li>Avoid smoking and alcohol</li>
                <li>Wait for the required time period if you've had recent medical procedures</li>
              </ul>
            </div>
            <div className="action-buttons">
              <Link to="/donate" className="primary-button">
                Try Again Later
              </Link>
              <Link to="/" className="secondary-button">
                Return Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EligibilityResult; 