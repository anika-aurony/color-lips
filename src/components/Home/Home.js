import React from 'react';
import useReview from '../../hook/useReview';
import cosmetic from '../cosmetic.jpg'
import './Home.css'
import Review from '../Reviews/Reviews';
import ReviewHome from '../ReviewHome/ReviewHome';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [reviews, setReviews] = useReview();
    const SliceReviews = reviews.slice(1, 4);
    console.log(SliceReviews);

    const navigate = useNavigate();

    const showReview = () => {
        const path = './Reviews'
        navigate(path);
    }
    
    return (
        <div>
            <div className='container'>
                <div className='first-part'>
                    <h1 className='clour1'>Find Your Long Lasting  and </h1>
                    <h2 className='colour2'> Moisturing Lipstick Shades</h2>
                    <p>Choose beautiful lipstick colours and give your lips an extra gloss and extra shine.</p>
                    <strong>Matt, satin or shimmer???</strong>
                    <p><strong>Any Lipstick colour you want!!!</strong></p>

                </div>
                <img src={cosmetic} alt="" />
            </div>
            <div>
                <h1>Customers Reviews</h1>
                
                
                {
                SliceReviews.map(SliceReview => <ReviewHome
                 key={SliceReview.id}
                 review = {SliceReview}
                ></ReviewHome>)
            }
                <button onClick={showReview} className='button'>See all reviews</button>    
                


            </div>
        </div>
    );
};

export default Home;