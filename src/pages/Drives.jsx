import React from 'react';
import '../App.css';
import img2023 from '../assets/2023.jpg';
import img20233 from '../assets/20233.jpeg';
import img20221 from '../assets/20221.jpeg';
import img20222 from '../assets/20222.jpg';
import img20223 from '../assets/20223.jpg';
import img20225 from '../assets/20225.jpeg';
import img20000 from '../assets/20000.webp';
const Drives = () => {
  // In a real application, this would come from a database
  const donationDrives = [
    {
      id: 1,
      title: 'City Hospital Blood Drive',
      date: 'March 15, 2023',
      location: 'City Hospital, 123 Main St',
      participants: 87,
      unitsCollected: 72,
      description: 'Our annual blood drive at City Hospital was a huge success with record participation.',
      images: [img2023, img20233],
      reviews: [
        { name: 'John D.', rating: 5, comment: 'Very well organized. The staff was professional and made the process comfortable.' },
        { name: 'Sarah M.', rating: 4, comment: 'Good experience overall. Waiting time could be improved.' }
      ]
    },
    {
      id: 2,
      title: 'University Campus Drive',
      date: 'November 5, 2022',
      location: 'State University, Student Center',
      participants: 124,
      unitsCollected: 103,
      description: 'Students showed tremendous spirit in this drive, making it our most successful campus event yet.',
      images: [img20221, img20222],
      reviews: [
        { name: 'Professor Williams', rating: 5, comment: 'Impressed with the turnout and student engagement. Looking forward to the next one!' },
        { name: 'Alex T.', rating: 5, comment: 'My first time donating, and it was a smooth experience.' },
        { name: 'Jamie L.', rating: 4, comment: 'Great initiative! Loved the free t-shirts and snacks.' }
      ]
    },
    {
      id: 3,
      title: 'Corporate Office Drive',
      date: 'August 23, 2022',
      location: 'Tech Innovations Inc, 456 Business Park',
      participants: 63,
      unitsCollected: 51,
      description: 'Employees took a break from their busy schedules to contribute to this lifesaving cause.',
      images: [img20222, img20223],
      reviews: [
        { name: 'Mike R.', rating: 4, comment: 'Convenient to have this at our workplace. The mobile donation unit was impressive.' },
        { name: 'Linda K.', rating: 3, comment: 'Good cause, but the process took longer than expected.' }
      ]
    },
    {
      id: 4,
      title: 'Community Center Drive',
      date: 'June 7, 2022',
      location: 'Downtown Community Center',
      participants: 95,
      unitsCollected: 81,
      description: 'Our community came together in a wonderful display of solidarity and compassion.',
      images: [img20225, img20000],
      reviews: [
        { name: 'Robert J.', rating: 5, comment: 'Amazing atmosphere! The volunteers were so kind and helpful.' },
        { name: 'Emily W.', rating: 5, comment: 'Brought my whole family. Great experience for everyone.' },
        { name: 'David M.', rating: 4, comment: 'Well organized event with minimal waiting time.' }
      ]
    }
  ];

  const renderStarRating = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="drives-container">
      <h1>Past Blood Donation Drives</h1>
      <p className="drives-intro">
        Take a look at our previous blood donation drives. Each event represents countless lives
        saved and communities strengthened. We're grateful to all donors who participated.
      </p>

      <div className="timeline">
        {donationDrives.map((drive) => (
          <div key={drive.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{drive.date}</div>
            <div className="timeline-content">
              <h2>{drive.title}</h2>
              <p className="location">{drive.location}</p>
              <p className="description">{drive.description}</p>

              <div className="stats">
                <div className="stat">
                  <span className="number">{drive.participants}</span>
                  <span className="label">Participants</span>
                </div>
                <div className="stat">
                  <span className="number">{drive.unitsCollected}</span>
                  <span className="label">Units Collected</span>
                </div>
              </div>

              <div className="images-container">
                {drive.images.map((image, index) => (
                  <div key={index} className="drive-image">
                    {/* In a real app, you would use actual images here */}
                    <div className="placeholder-image">{image}</div>
                  </div>
                ))}
              </div>

              <div className="reviews-section">
                <h3>Donor Reviews</h3>
                {drive.reviews.map((review, index) => (
                  <div key={index} className="review">
                    <div className="review-header">
                      <span className="reviewer-name">{review.name}</span>
                      <span className="rating">{renderStarRating(review.rating)}</span>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="upcoming-drives">
        <h2>Join Our Next Drive</h2>
        <p>
          Want to make a difference? Our next blood donation drive is just around the corner.
          Check back soon for dates and locations, or sign up for our newsletter to stay informed.
        </p>
        <button className="cta-button">Sign Up for Updates</button>
      </div>
    </div>
  );
};

export default Drives; 