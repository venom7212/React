import React, { useState } from 'react';
import './RatingFilms.css';


const RatingFilms = () => {
    // state = {
    //     myRate: 5
    // }
    const [myRate, setMyRate] = useState(0)

    const getButtonRating = (_, index) => {
        return <button onClick={() => setMyRate(index + 1)} key={index} className="buttone_rating">{index + 1}</button>
    }
    return (
        <div className="rating_buttons">
            <div className="films_my_rating">Оцените фильм:{myRate}</div>
            {Array.from({ length: 5 }, getButtonRating)}
            {/*             
            <button id="buttone_rating" className="rating_one">1</button>
            <button id="buttone_rating" className="rating_two">2</button>
            <button id="buttone_rating" className="rating_three">3</button>
            <button id="buttone_rating" className="rating_four">4</button>
            <button id="buttone_rating" className="rating_five">5</button> */}
        </div>
    )
}
export default RatingFilms;