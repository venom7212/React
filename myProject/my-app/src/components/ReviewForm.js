import React from 'react'
import RatingFilms from './RatingFilms'
import './ReviewForm.css';

const ReviewForm = ({ }) => {
    return (
        
        <div className='ReviewForm'>
 
            <input
                id='nameReview'
                type='text'
                className='name_Review'
                placeholder='Ваше имя'

            />
            <p />
            <input
                id='textReview'
                className='text_Review'
                placeholder='Отзыв о фильме'
            ></input>
            <p />

            <p />
            <button className='add__btn'> Оставить отзыв </button>
            
        </div>
        
    )
}



export default ReviewForm;