import React from 'react';
import useReview from '../../hook/useReview'
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    

    return (
        <div  >
            <h1> Customers Reviews</h1>
            <div  >
            {
                reviews.map(review => <Review
                 key={review.id}
                 review = {review}
                ></Review>)
            }

            </div>
        </div>
    );
};

export default Reviews;