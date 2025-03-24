import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const categories = [
    { name: 'Accommodation', image: '/images/accommodation.jpeg' },
    { name: 'Food & Dining', image: '/images/food.jpeg' },
    { name: 'Adventure & Activities', image: '/images/adventure.jpg' },
    { name: 'Tourist Attractions', image: '/images/attractions.jpg' },
    { name: 'Shopping & Markets', image: '/images/shopping.jpg' },
    { name: 'Wellness & Relaxation', image: '/images/wellness.jpeg' },
    { name: 'Nightlife & Entertainment', image: '/images/nightlife.jpg' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/Login');
  };

  return (
    <div className="home-container">
      <header>
        <div className="profile-logo">👤</div>
        <h2>Hi {username}, Good Morning!</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      <div className="categories">
        <h3>Select Places Category</h3>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-box">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
