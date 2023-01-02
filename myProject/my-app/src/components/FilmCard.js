import React, { useState } from 'react';
import './FilmCard.css';
import Star from '../resources/starGray'
import ReviewsPeoples from './ReviewsPeoples'

 

const FilmCard = ({ dataFilms }) => {
    const [stateAllfimls,setStateallfilms] = useState(dataFilms)
    // const  [stateAllReviews, setStateallreviews] = useState(dataFilms.reviews)

    // const [stateAllReviews, setStateallreviews] = useState(allReviews)
  
    const test1Function = (test3) =>{ //не используется
        // console.log(test1 ,'+', test2, '+' ,test3, '+',test4)
        setStateallfilms([
            ...stateAllfimls,
            test3
        ])
    }

    const [stateCountReviws, setStateCountReviws] = useState(0)
    const countReviws = (n) =>{ //не используется
        setStateCountReviws(
        n 
        )
    }

    let newPlates

    if (stateAllfimls.length) {
        newPlates = stateAllfimls.map(function (item) {
            
            let stateAllReviews = item.reviews
          
            // console.log(stateAllReviews)
            return (
                <div key={stateAllfimls.id} className='oneFilmBig'>
                    <div className="oneFilm" >
                        <div className="list_container" >
                            <img className="films_posterLink" src={item.posterLink} />
                            {/* <p className="films_date">Date:{item.date}</p>
                        <p className="films_rating">Rating:{item.rating}</p> */}
                        </div>
                        <div className="desc_container">
                            <p className="films_title">{item.title}:</p>
                            <div className='rate_review'>
                                <div className='average_rate'>
                                    <svg className='star_IMG'>{Star}</svg>
                                    <svg className='star_IMG'>{Star}</svg>
                                    <svg className='star_IMG'>{Star}</svg>
                                    <svg className='star_IMG'>{Star}</svg>
                                    <svg className='star_IMG'>{Star}</svg>
                                </div>
                                <div className='summa_review'>  Отзывы({item.countReviews})</div>
                                {/* <div className='summa_review' onClick={()=>{uberState()}}> teset</div> */}
                            </div>

                        
                        
                            <div className="films_description">{item.description}</div>

                        </div>

                     
                    </div>
                   
                    <ReviewsPeoples props2 = {stateAllReviews} testF = {test1Function} countReviws={countReviws}/> 


                </div>

            )
        })
    } else {
        newPlates = <p>Нет фильмов</p>
    }
    return (
        <div key={stateAllfimls.id} className="films">
            {newPlates}
        </div>


    )
}

export default FilmCard;

