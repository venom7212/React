import React, { useState } from 'react'
import './ReviewsPeoples.css';
import ReviewForm from './ReviewForm'
import Stars from './Stars'


const ReviewsPeoples = ({ reviews, reviewsSet ,setAverage_rate,summReviews}) => {

    const pushNewReviews = (name, review, date, rate) => {
        reviewsSet([
            ...reviews,
            {
                name,
                review,
                date,
                rate,
            }
        ])
        setAverage_rate ([
            ...summReviews,
                    rate
        ])
    }



    const [visible, setVisible] = useState(false)

    const visibleLogics = () => {
        if ( visible  == false) {
            setVisible(
                true
            )
        } else {
            setVisible(
                false
            )
        }
        setVisible(
            !visible
        )
    }

    let newPlates2
    if (reviews.length > 0) {
        newPlates2 = reviews.map(function (item, index) {
           
            return (
                <div className='all_reviews' key={`${index}_${item.name}`} >
                    <div className='header_all_reviews'>
                        <div key={reviews.name} className='name_all_reviews'>{item.name}</div>
                        <div key={reviews.date} className='data_all_reviews'>{item.date}</div>
                        <div className='zvezdi_all_reviews'>
                            {/* <Stars /> */}
                            <Stars starsCount={item.rate} />
                        </div>
                    </div>
                    {/* <button onClick={()=>addReviews()}>click</button> */}
                    <div className='otziv_all_reviews'>{item.review}</div>

                </div>
            )
        })
       
    } else {
        newPlates2 = <div className='empty_reviews'>Отзывов еще нет, будь первым</div>

    }
    return (
        <div className='pushNewReviews'>
            <ReviewForm pushNewReviews={pushNewReviews} />
            {visible ? <div className="reviews">

                {newPlates2}

            </div> : null}
            <button onClick={visibleLogics} className='button_visible'>{visible ? "Скрыть отзывы ▲" : "Показать отзывы ▼"}</button>

        </div>
    )
}


export default ReviewsPeoples;
