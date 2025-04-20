import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Import pages
import Home from './pages/Home'
import Donate from './pages/Donate'
import Drives from './pages/Drives'
import EligibilityResult from './pages/EligibilityResult'
import BloodRequests from './pages/BloodRequests'
import CreateBloodRequest from './pages/CreateBloodRequest'
import BloodRequestDetails from './pages/BloodRequestDetails'
import DonationRequest from './pages/DonationRequest'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <div className="logo">
            <span className="logo-icon">💉</span>
            <span className="logo-text">LifeStream</span>
          </div>
          <nav className="main-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/donate" className="nav-link">Donate</Link>
            <Link to="/drives" className="nav-link">Donation Drives</Link>
            <Link to="/blood-requests" className="nav-link">Blood Requests</Link>
            <Link to="/donation-request" className="nav-link">Request Blood</Link>
          </nav>
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/drives" element={<Drives />} />
            <Route path="/eligibility-result" element={<EligibilityResult />} />
            <Route path="/blood-requests" element={<BloodRequests />} />
            <Route path="/blood-requests/new" element={<CreateBloodRequest />} />
            <Route path="/blood-requests/:requestId" element={<BloodRequestDetails />} />
            <Route path="/donation-request" element={<DonationRequest />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Hemofy Blood Donation</h3>
              <p>Connecting donors to those in need</p>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: info@lifestream.org</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} LifeStream Blood Donation. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
