import React from 'react'
import RatingFilms from './RatingFilms'
import './CardFilms.css';

const CardFilms = ({ dataFilms }) => {
    const { title, posterLink, date, rating, description } = dataFilms
    let newPlates
    if (dataFilms.length) {
        newPlates = dataFilms.map(function (item) {
            return (
                <div className="oneFilm" key={item.id}>
                    <div className="list_container" >
                        <p className="films_title">{item.title}:</p>
                        <img className="films_posterLink" src={item.posterLink} />
                        <p className="films_date">Date:{item.date}</p>
                        <p className="films_rating">Rating:{item.rating}</p>
                    </div>
                    <div className="desc_container">
                        <div className="films_description">Description:{item.description}</div>

                        <div className="review_contetn">
                            <button className="films_feedback_click">review</button>
                            {/* <div className="films_reviews">films_review:{item.review}</div>  */}
                            <RatingFilms  />
                        </div>
                    </div>
                </div>
            )
        })
    } else {
        newPlates = <p>Добавьте фильм</p>
    }
    return (
        <div className="films">
            {newPlates}
        </div>
    )
}

export default CardFilms;