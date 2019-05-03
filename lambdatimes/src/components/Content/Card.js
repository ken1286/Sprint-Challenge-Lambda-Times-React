import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline /* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img /* image source goes here */} alt="img-card" />
        </div>
        <span>By {props.author /* author goes here */}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headLine: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
}

// Make sure to include PropTypes.

export default Card;