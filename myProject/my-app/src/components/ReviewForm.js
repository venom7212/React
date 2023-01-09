import React, { useState } from 'react';
import Stars from './Stars'
import './ReviewForm.css';



const ReviewForm = ({ pushNewReviews }) => {
    const [a, setStateA] = useState('');
    const [b, setStateB] = useState('');
    const [d, setStateD] = useState(0);

    // const [stateReviwPeoples,setStateallfilms] = useState(props3)
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hrs = date.getHours();
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();

    

    const c = `${day < 10 ? 0 : ''}${day}.${month < 10 ? 0 : ''}${month}.${year} ${hrs}:${minutes}`;

    const event_handlerA = (e) => {
        const value = e.currentTarget.value
        setStateA(value)
    }

    const event_handlerB = (e) => {
        const value = e.currentTarget.value
        setStateB(value)
    }

    const resetStateInputs = () => {
        setStateA('');
        setStateB('');
    }

    const onClick = () => {
        if (a && b && d !== ''){
            pushNewReviews(a, b, c, d);
            resetStateInputs()
        }else{
            alert('заполните основные поля')
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
                    value={a}
                    onChange={event_handlerA}
                ></input>

                <Stars setStars={setStateD} starsCount={d} />

            </div>
            <input
                id='textReview'
                className='text_Review'
                placeholder='Отзыв о фильме'
                value={b}
                onChange={event_handlerB}
            ></input>
            <button className='add__btn' onClick={onClick}> Оставить отзыв </button>
        </div>

    )
}



export default ReviewForm;

