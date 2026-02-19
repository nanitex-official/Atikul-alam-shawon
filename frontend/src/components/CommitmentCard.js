import React from 'react';
import { Link } from 'react-router-dom';
import './CommitmentCard.css';

const CommitmentCard = ({ title, image, link }) => {
  return (
    <div className="commitment-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <h4 className="card-title">{title}</h4>
      <Link to={link} className="card-button btn">
        বিস্তারিত দেখুন
      </Link>
    </div>
  );
};

export default CommitmentCard;
