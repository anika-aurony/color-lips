import React from 'react';
import cosmetic from '../cosmetic.jpg'
import './Home.css'
const Home = () => {
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
                <h3>Reviews</h3>
            </div>
        </div>
    );
};

export default Home;