import React, { useState } from 'react';
import Stars from './Stars'
import './ReviewForm.css';



const ReviewForm = ({ pushNewReviews }) => {
    // const [stateReviwPeoples,setStateallfilms] = useState(props3)
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hrs = date.getHours();
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const c = `${day}.${month}.${year} ${hrs}:${minutes}`;


    const [a, setStateA] = useState('')
    const [b, setStateB] = useState('')

    const event_handlerA = (e) => {
        const value = e.currentTarget.value
        setStateA(value)
    }

    const event_handlerB = (e) => {
        const value = e.currentTarget.value
        setStateB(value)
    }
  
    const [d, setStateD] = useState('')

    let t =''
    const setStarStateOnD = (t) => {
         setStateD(
                 t
                )        
    }

    const resetStateInputs = (t) => {
        setStateA (
            ''
        )
        setStateB (
            ''
        )
    
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

                <Stars setStarStateOnDonStars={setStarStateOnD}   />

            </div>
            <input
                id='textReview'
                className='text_Review'
                placeholder='Отзыв о фильме'
                value={b}
                onChange={event_handlerB}
            ></input>
            <button className='add__btn' onClick={() => { setStarStateOnD(t); pushNewReviews(a, b, c, d);resetStateInputs()}}> Оставить отзыв </button>
        </div>

    )
}



export default ReviewForm;

