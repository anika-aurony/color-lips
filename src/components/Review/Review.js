import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name, review, rating} = props.review
    return (
        <div className='review-container'>
            <h2>{name}</h2>
            <p>{review}</p>
            <h5>Ratings: {rating}</h5>
        </div>
    );
};

export default Review;