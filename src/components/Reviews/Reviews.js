import React from 'react';
import useReview from '../../hook/useReview'
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1>Reviews {reviews.length}</h1>
            {
                reviews.map(review => <Review
                 key={review.id}
                 review = {review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;