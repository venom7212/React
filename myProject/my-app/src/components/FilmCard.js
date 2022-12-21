import React from 'react'
import RatingFilms from './RatingFilms'
import './FilmCard.css';
import ReviewForm from './ReviewForm'

const FilmCard = ({ dataFilms }) => {
    const { title, posterLink, description } = dataFilms
    let newPlates
    if (dataFilms.length) {
        newPlates = dataFilms.map(function (item) {
            return (
                <div className='oneFilmBig'>
                    <div className="oneFilm" key={item.id}>

                        <div className="list_container" >

                            <img className="films_posterLink" src={item.posterLink} />
                            {/* <p className="films_date">Date:{item.date}</p>
                        <p className="films_rating">Rating:{item.rating}</p> */}
                        </div>
                        <div className="desc_container">
                            <p className="films_title">{item.title}:</p>
                            <div className="films_description">{item.description}</div>
                        </div>

                        {/* <div className="review_contetn"> */}
                        {/* <button className="films_feedback_click">review</button> */}
                        {/* <div className="films_reviews">films_review:{item.review}</div>  */}
                        

                        {/* </div> */}
                    </div>
                    <ReviewForm />
                    <RatingFilms  />
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

export default FilmCard;