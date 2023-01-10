import React, { useState } from 'react';
import Stars from './Stars'
import './ReviewForm.css';



const ReviewForm = ({ pushNewReviews }) => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rate, setRate] = useState(0);

    const inputHandler = (e,setter) => {
        const value = e.currentTarget.value
        setter(value)
    }

    const resetStateInputs = () => {
        setName('');
        setReview('');
        setRate(0);
    }

    const onClick = () => {
        if (name && review && rate !== 0) {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hrs = date.getHours();
            const minutes = date.getMinutes();
            const preparedDate = `${day < 10 ? 0 : ''}${day}.${month < 10 ? 0 : ''}${month}.${year} ${hrs}:${minutes}`;
            pushNewReviews(name, review, preparedDate, rate);
            resetStateInputs()
        } else {
            alert('Заполните основные поля')
        }
    }

    return (

        <div className='ReviewForm'>
            <div id='headerReviewForm'>
                <input
                    id='nameReview'
                    type='text'
                    className='name_Review'
                    placeholder='Ваше имя'
                    value={name}
                    onChange={(e)=>(inputHandler(e,setName))}
                ></input>

                <Stars setStars={setRate} starsCount={rate} />

            </div>
            <input
                id='textReview'
                className='text_Review'
                placeholder='Отзыв о фильме'
                value={review}
                onChange={(e)=>(inputHandler(e,setReview))}

            ></input>
            <button className='add__btn' onClick={onClick}> Оставить отзыв </button>
        </div>

    )
}



export default ReviewForm;

