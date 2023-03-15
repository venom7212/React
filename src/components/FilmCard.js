import React, {  useState } from 'react';
import './Main.css';
import ReviewsPeoples from './ReviewsPeoples'
import Stars from './Stars'


const FilmCard = ({ filmData }) => {
    const { posterLink, title, description } = filmData;

    const [reviews, setReviews] = useState(filmData.reviews);


    const [summReviews, setAverage_rate] = useState([])

    
    const calculatedReviews = summReviews.reduce(function(a, b) {
        return Math.round(a + b);
    },0)
    const calculatedReviewsDelenie = calculatedReviews/summReviews.length  
    
    

    // const summRev = (summReviews) => summReviews.reduce((acc, num) => acc + num, 0);
    // const delenieRev = (summRev,summReviews) => Math.round(summRev / summReviews.length)

 


    return (
        <div key={`${title}_${description.substring(0, 2)}`} className='oneFilmBig'>
            <div className="oneFilm" >
                <div className="list_container" >
                    <img className="films_posterLink" src={posterLink} />
                    {/* <p className="films_date">Date:{item.date}</p>
                        <p className="films_rating">Rating:{item.rating}</p> */}
                </div>
                <div className="desc_container">
                    <p className="films_title">{title}:</p>
                    <div className='rate_review'>
                        <div className='average_rate'>
                            <Stars starsCount={calculatedReviewsDelenie} />
                        </div>
                        <div className='summa_review'>  Отзывы({reviews.length})</div>
                        {/* <div className='summa_review' onClick={()=>{uberState()}}> teset</div> */}
                    </div>
                    <div className="films_description">{description}</div>
                </div>
            </div>
            <ReviewsPeoples reviews={reviews} summReviews={summReviews} setAverage_rate={setAverage_rate} reviewsSet={setReviews} />
        </div>
    )
}

export default FilmCard;
